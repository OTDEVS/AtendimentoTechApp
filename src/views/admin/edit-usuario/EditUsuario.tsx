import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { EditUsuarioStyleSheet } from "./EditUsuarioStyleSheet";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Icon, Input } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";

type FormValues = {
    nome: string;
    sobrenome: string;
    email: string;
    usuario: string;
    senha: string;
}

const schema = yup.object({
    nome: yup.string().required("Campo obrigatório."),
    usuario: yup.string().required("Campo obrigatório."),
    senha: yup.string().min(6, "A senha deve conter no mínimo 6 digitos.").required("Campo obrigatório."),
    email: yup.string().email("Informe um email válido.").required("Campo obrigatório."),
}).required();

export default function EditUsuario( route: any, navigation: any ) {

    const [user, setUser] = useState(route.route.params ? route.route.params : {})
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })
    const [passwordVisible, setPasswordVisible] = useState(false)

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props: any) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} size={22} />
        </TouchableWithoutFeedback>
    );

    function dispatchData() {

        navigation.goBack()
    }

    return (
        <View style={EditUsuarioStyleSheet.container}>
            <Text style={EditUsuarioStyleSheet.labelSection}>DADOS</Text>
            <View style={EditUsuarioStyleSheet.viewForm}>
                <View style={EditUsuarioStyleSheet.viewFormRow}>
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Nome"
                                style={[EditUsuarioStyleSheet.inputForm, { flex: 2, marginRight: 5 }]}
                                size="large"
                                onChangeText={nome => setUser({ ...user, nome })}
                                onBlur={onBlur}
                                value={user.nome}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="sobrenome"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Sobrenome"
                                style={[EditUsuarioStyleSheet.inputForm, { flex: 2 }]}
                                size="large"
                                onChangeText={sobrenome => setUser({ ...user, sobrenome })}
                                onBlur={onBlur}
                                value={user.sobrenome}
                            />
                        )}
                    />
                </View>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Email"
                            style={EditUsuarioStyleSheet.inputForm}
                            size="large"
                            onChangeText={email => setUser({ ...user, email })}
                            onBlur={onBlur}
                            value={user.email}
                        />
                    )}
                />
                <View style={EditUsuarioStyleSheet.viewFormRow}>
                    <Controller
                        control={control}
                        name="usuario"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Usuário"
                                style={[EditUsuarioStyleSheet.inputForm, { flex: 2, marginRight: 5 }]}
                                size="large"
                                onChangeText={usuario => setUser({ ...user, usuario })}
                                onBlur={onBlur}
                                value={user.usuario}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Senha"
                                accessoryRight={renderPasswordIcon}
                                secureTextEntry={!passwordVisible}
                                style={[EditUsuarioStyleSheet.inputForm, { flex: 2 }]}
                                size="large"
                                onChangeText={senha => setUser({ ...user, senha })}
                                onBlur={onBlur}
                                value={user.senha}
                            />
                        )}
                    />
                </View>
            </View>
            <Text style={EditUsuarioStyleSheet.labelSection}>CONTRATOS</Text>
            <Button style={EditUsuarioStyleSheet.submitButton} onPress={() => dispatchData()}>
                SALVAR
            </Button>
        </View>
    )
}