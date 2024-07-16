import React, { useRef } from 'react';
import { Pressable, View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
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
        // <View style={styles.container}>
        //     <Text style={styles.title}>Sign Up</Text>
        //     <TextInput
        //         style={styles.input}
        //         placeholder="Email"
        //         keyboardType="email-address"
        //         autoCapitalize="none"
        //         autoComplete="email"
        //         onChangeText={value => emailRef.current = value}
        //     />
        //     <TextInput
        //         style={styles.input}
        //         placeholder="Password"
        //         secureTextEntry
        //         autoComplete="password"
        //         onChangeText={value => passwordRef.current = value}
        //     />
        //     <Button title="Sign Up" onPress={handleRegister} />
        //     <Pressable onPress={() => router.push('signIn')}>
        //         <Text style={styles.signUpText}>Already have an account? Sign in</Text>
        //     </Pressable>
        // </View>
        <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>{`Hello!\nRegister to get started.`}</Text>

        <View  style={styles.errorMessage}>
            <Text style={styles.error}> Error message </Text>
        </View>


        <View style={styles.form}>
            <View>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize='none'
                  keyboardType="email-address"
                  autoComplete="email"
                  onChangeText={(value) => (emailRef.current = value)}></TextInput>
            </View>

            <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize='none'
                  secureTextEntry
                  autoComplete="password"
                  onChangeText={(value) => (passwordRef.current = value)}
                  >
                  </TextInput>
            </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          >
            <Text style={{color: "#FFF", fontWeight: "500"}}> Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: "center", marginTop: 32}}
          onPress={() => router.push('signIn')} 
          >
            <Text style={{ color: "#414959", fontSize: 13}}>
                Already have an account? <Text style={{fontWeight: "500", color: "#E9446A"}}>Sign In</Text>
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     signUpText: {
//         marginTop: 20,
//         textDecorationLine: 'underline',
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100, // Adjust margin top as needed
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginBottom: 40,
        marginHorizontal:30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"     
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    }    
});
