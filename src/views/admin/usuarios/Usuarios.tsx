import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UsuariosStyleSheet } from "./UsuariosStyleSheet";
import { Avatar, Button, Card, Icon } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { usuarios } from "./UsuariosData";

export default function Usuarios(props: any) {

    function renderCardUser() {
        return usuarios.map(usr => {
            return (
                <Card key={usr.id} style={UsuariosStyleSheet.cardUser} status={usr.admin ? 'primary' : ''}>
                    <View style={UsuariosStyleSheet.viewCard}>
                        <Avatar
                            size="medium"
                            source={require('../../../../assets/robo-ot.png')}
                            style={{ backgroundColor: 'white' }} />
                        <View>
                            <Text style={UsuariosStyleSheet.nomeUsrCard}>{usr.nome} {usr.sobrenome}</Text>
                            <Text style={UsuariosStyleSheet.emailUsrCard}>{usr.email}</Text>
                        </View>
                        <TouchableOpacity
                            style={UsuariosStyleSheet.editButton}
                            onPress={() => props.navigation.navigate('EditUsuario', usr)}
                        >
                            <MaterialIcons name="edit" size={20} />
                        </TouchableOpacity>
                    </View>
                </Card>
            )
        })
    }

    return (
        <View style={UsuariosStyleSheet.container}>
            <ScrollView >
                {renderCardUser()}
            </ScrollView >
            <Button
                style={UsuariosStyleSheet.buttonAddUsr}
                accessoryLeft={<Icon name='person-add-outline' />}
                onPress={() => props.navigation.navigate('EditUsuario')}
            />
        </View>
    )
}