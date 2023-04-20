import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Buttons';

export default function AuthScreen() {
    const [isCompatible, setIsCompatible] = useState(false);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsCompatible(compatible);
            if(compatible) {
                const enrolled = await LocalAuthentication.isEnrolledAsync();
                setIsEnrolled(enrolled);
            }
        })()
    })

    const handleBiometricAuth = () => {  
        const biometricAuth = LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with Biometrics',
            fallbackLabel: 'Enter password'
        });
        biometricAuth.then(result => {
            setIsAuth(result.success);
        });
    }

    return (
        <View style={styles.container}>
            {!isAuth ? <>
                <Text style={styles.text}>
                    {isCompatible ? isEnrolled ? "Device is compatible and auth is enabled" : "Device is compatible but auth is not enabled" : "Device is not compatible"}
                </Text> 
                {isCompatible && isEnrolled ? <Button title="Login" onPress={handleBiometricAuth} /> : ''}
            </> : <>
                <Text style={{
                    fontSize: 32,
                    color: "#fff"
                }}>
                    Authenticated !
                </Text>
                <Button title="Logout" onPress={() => setIsAuth(false)} />
            </> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    }
});