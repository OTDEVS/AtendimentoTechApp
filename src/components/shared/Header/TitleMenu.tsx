import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import theme from "../../../customize/theme.json"
import { useSession } from '../../../context/sessionContext';

const MenuIcon = (props: any) => (
    <Icon {...props} name='ellipsis-vertical' />
);

const InfoIcon = (props: any) => (
    <Icon {...props} name='information-circle-outline' />
);

const LogoutIcon = (props: any) => (
    <Icon {...props} name='exit-outline' />
);

export const TitleMenu = (props: any) => {
    const { signOut, userData } = useSession()
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} title='About' />
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' onPress={signOut} />
            </OverflowMenu>
        </React.Fragment>
    );

    const renderTitle = () => {
        let title = ""

        if (props.title != null) title = props.title
        else title = `Bem Vindo, ${userData?.nome}`

        return (
            <View style={styles.titleContainer}>
                <Text style={styles.labelSaudacao}>
                    {title}
                </Text>
            </View>
        )
    }

    return (
        <TopNavigation
            title={renderTitle}
            accessoryRight={renderOverflowMenuAction}
            style={styles.topNavigation}
        />
    );
};

const styles = StyleSheet.create({
    topNavigation: {
        paddingHorizontal: 10,
        backgroundColor: theme['color-basic-200'],
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginHorizontal: 16,
    },
    labelSaudacao: {
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 10,
        color: theme['color-primary-600']
    }
});