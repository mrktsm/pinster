import React, { useRef } from 'react';
import { Pressable, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '~/context/authContext';

export default function SignUp() {
    const router = useRouter();
    const { register } = useAuth();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleRegister = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Sign Up", "Please fill all the fields");
            return;
        }

        let response = await register(emailRef.current, passwordRef.current);
        
        console.log('got result: ', response);

        if (!response.success) {
            Alert.alert('Sign Up', response.msg);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                onChangeText={value => emailRef.current = value}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                autoComplete="password"
                onChangeText={value => passwordRef.current = value}
            />
            <Button title="Sign Up" onPress={handleRegister} />
            <Pressable onPress={() => router.push('signIn')}>
                <Text style={styles.signUpText}>Already have an account? Sign in</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    signUpText: {
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
