import React, { useContext } from 'react';
import { StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return <SafeAreaView style={styles.AndroidSafeArea}>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
            <Button title="Sign out" onPress={signout}/>
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
});

export default AccountScreen;