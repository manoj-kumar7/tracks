import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText='Sign in to Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink 
                text='Dont have an account? Sign up instead'
                routeName='Signup'
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;