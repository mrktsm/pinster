import React, { useRef } from 'react';
import { Pressable, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Assuming useRouter is correctly imported
import { useAuth } from '~/context/authContext';

export default function SignIn() {
    const router = useRouter();
    const { login } = useAuth();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Sign In", "Please fill all the fields");
            return;
        }

        const response = await login(emailRef.current, passwordRef.current);

        if (!response.success) {
            Alert.alert('Sign In', response.msg);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                onChangeText={(value) => (emailRef.current = value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                autoComplete="password"
                onChangeText={(value) => (passwordRef.current = value)}
            />
            <Button title="Sign In" onPress={handleLogin} />
            <Pressable onPress={() => router.push('signUp')}>
                <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
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
