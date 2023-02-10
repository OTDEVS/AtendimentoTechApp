import React, { createContext, useState } from "react";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { authServices } from "../services/AuthServices";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { userServices } from "../services/UserServices";

export interface SessionData {
    token: string
    refreshToken: string
}

export class UserData {
    id?: Number
    nome?: string
    senha?: string
    email?: string
    telefone?: string
    cargo?: string
    sso?: Number
    datacadastro?: string
    dataacesso?: string
    cancelado?: Number
    contrato?: Number
    qualidade?: Number
    tecnica?: Number
    admin?: Number
    permissao?: [
        {
            idusuario?: Number
            uprincipal?: string
            ncontrato?: string
            serie?: string
            permissao?: {
                contrato?: string
                financeiro?: string
                tecnica?: string
            }
        }
    ]
}

interface SessionContextData {
    sessionData?: SessionData
    userData?: UserData
    signIn: (loginData: any) => Promise<SessionData>
    signOut: () => Promise<void>
    loading: boolean
    userPermissions: string[]
}

interface Props {
    children: React.ReactNode;
}

export const SessionContext = createContext<SessionContextData>(
    {} as SessionContextData
)

export const SessionProvider: React.FC<Props> = ({ children }) => {

    const [sessionData, setSession] = useState<SessionData>()
    const [loading, setLoading] = useState(true)
    const [userPermissions, setPermission] = useState<string[]>([''])
    const [userData, setUserData] = useState<UserData>()

    useEffect(() => {
        loadFromStorage()
    }, [])

    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem(StorageKeys.SESSION_DATA)
        const user = await AsyncStorage.getItem(StorageKeys.USER_DATA)

        if (auth) {
            setSession(JSON.parse(auth) as SessionData)
        }

        if (user) {
            setUserData(JSON.parse(user) as UserData)
            setUserPermissions(JSON.parse(user) as UserData)
        }

        setLoading(false)

    }

    async function signIn(loginData: any): Promise<any> {
        try {
            const authData = await authServices.signIn(loginData)
            setSession(authData)
            const decodedToken: any = jwtDecode(authData.token)
            const sData: SessionData = {
                token: authData.token,
                refreshToken: authData.refreshToken
            }
            AsyncStorage.setItem(StorageKeys.SESSION_DATA, JSON.stringify(sData))
            getUserData(decodedToken, authData)
        } catch (error) {
            Alert.alert("Usuário ou Senha errada")
        }
    }

    async function signOut(): Promise<void> {
        setSession(undefined)
        AsyncStorage.removeItem(StorageKeys.SESSION_DATA)
        return
    }

    async function getUserData(decodedToken: any, authData: any): Promise<any> {

        try {
            const data = await userServices.getUserData(decodedToken.user_id, authData.token)

            const userData: UserData = {
                id: data.userData.id,
                nome: data.userData.nome,
                email: data.userData.email,
                cargo: data.userData.cargo,
                cancelado: data.userData.cancelado,
                admin: data.userData.admin,
                permissao: data.userData.permissao
            }
            AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(userData))

        } catch (error) {
            console.error(error);
        }
    }

    function setUserPermissions(userData: any) {
        const permissoes = userData.permissao.map((permissao: any) => {
            return permissao;
        });

        const permissoesContrato: [] = permissoes.filter((permissoes: any) => {
            return permissoes.permissao.contrato == 1 || permissoes.permissao.contrato == 2
        })

        const permissoesFinanceiro: [] = permissoes.filter((permissoes: any) => {
            return permissoes.permissao.financeiro == 1 || permissoes.permissao.financeiro == 2
        })

        const permissoesTecnica: [] = permissoes.filter((permissoes: any) => {
            return permissoes.permissao.tecnica == 1 || permissoes.permissao.tecnica == 2
        })

        const permissions = []
        permissoesContrato.length > 0 && permissions.push('RL_CONTRATOS')
        permissoesFinanceiro.length > 0 && permissions.push('RL_FINANCEIRO')
        permissoesTecnica.length > 0 && permissions.push('RL_TECNICA')
        userData.admin == 1 && permissions.push('ADMIN')

        setPermission(permissions)
    }

    return (
        <SessionContext.Provider value={{ sessionData, userData, loading, userPermissions, signIn, signOut }}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession() {
    const context = useContext(SessionContext)
    return context
}

export const StorageKeys = {
    SESSION_DATA: '@SessionData',
    USER_DATA: '@UserData'
}