import React, { useRef, useState } from "react"
import { Image, KeyboardAvoidingView, View, Alert } from "react-native"
import { Button, Icon, Input, Layout, Text, useTheme } from "@ui-kitten/components"
import { LoginStyleSheet } from "./LoginStyleSheet"
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSession } from "../../context/sessionContext"

type FormValues = {
    email: string;
    senha: string;
};

const schema = yup.object({
    email: yup.string().email("Informe um email válido.").required("Campo obrigatório."),
    senha: yup.string().min(3, "A senha deve conter no mínimo 6 digitos.").required("Campo obrigatório.")
}).required();


export default function Login(props: any) {

    const { signIn } = useSession()
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [acessando, setAcessando] = useState(false)

    const onSignInButtonPress = (data: any) => {
        signIn(data)
        setAcessando(true)
    };

    const onForgotPasswordButtonPress = () => {
        Alert.alert("Esqueceu a senha")
        //navigation && navigation.navigate('ForgotPassword');
    };

    function onPasswordIconPress() {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props: any) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <KeyboardAvoidingView style={LoginStyleSheet.container} behavior='height'>
            <View style={LoginStyleSheet.headerContainer}>
                <Image source={require('../../../assets/new_logo_office_white.png')} style={LoginStyleSheet.logoOffice} />
                <Text category="h1" style={LoginStyleSheet.labelHeader}>Atendimento Tech</Text>
            </View>
            <Layout style={LoginStyleSheet.formContainer}>
                <View style={LoginStyleSheet.viewInputForm}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Usuário"
                                accessoryRight={<Icon name={'person'} />}
                                style={[LoginStyleSheet.inputForm]}
                                size="large"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors?.email && <Text style={LoginStyleSheet.labelDanger}>
                        {errors.email.message}
                    </Text>}
                </View>
                <View style={LoginStyleSheet.viewInputForm}>
                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Senha"
                                accessoryRight={renderPasswordIcon}
                                secureTextEntry={!passwordVisible}
                                style={[LoginStyleSheet.inputForm]}
                                size="large"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors?.senha && <Text style={LoginStyleSheet.labelDanger}>
                        {errors.senha.message}
                    </Text>}
                </View>
                <View style={LoginStyleSheet.forgotPasswordContainer}>
                    <Button
                        style={LoginStyleSheet.forgotPasswordButton}
                        appearance='ghost'
                        status='basic'
                        onPress={onForgotPasswordButtonPress}>
                        Esqueceu a senha?
                    </Button>
                </View>
            </Layout>
            <Button
                style={LoginStyleSheet.signInButton}
                size='giant'
                onPress={handleSubmit(onSignInButtonPress)}
            >
                {acessando ? "ENTRANDO..." : "ENTRAR"}
            </Button>
        </KeyboardAvoidingView>
    )
}