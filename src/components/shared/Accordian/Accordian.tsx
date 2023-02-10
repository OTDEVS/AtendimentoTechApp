import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import theme from '../../../customize/theme.json'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Accordian(props: any) {

    const [expanded, setExpanded] = useState(false)

    if (Platform.OS == 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    return (
        <View style={!expanded ? styles.viewAccordianHide : styles.viewAccordianExpanded}>
            <TouchableOpacity style={styles.header} onPress={() => toggleExpand()}>
                <Text style={[styles.title]}>{props.title}</Text>
                <MaterialIcons name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
                expanded &&
                <View style={styles.child}>
                    {props.component}
                </View>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    viewAccordianExpanded: {
        flex: 1,
        marginBottom: 10,
    },
    viewAccordianHide: {
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme['color-basic-800']
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        paddingHorizontal: 18,
        alignItems: 'center',
    },
    parentHr: {
        height: 1,
        width: '100%'
    },
    child: {
        flex:1,
        paddingHorizontal: 10,
    }

});