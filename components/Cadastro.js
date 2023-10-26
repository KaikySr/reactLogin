import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default function Cadastro({ navigation }) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                
                <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='Email or username'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='Name'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='CPF'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='Birthdate'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        secureTextEntry
                        placeholder='Password'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        secureTextEntry
                        placeholder='Confirm Password'
                    />
                </View>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => navigation.navigate("main")}
                >
                    <Text 
                        style={{
                            fontFamily: 'Poppins', 
                            fontWeight: '600', 
                            fontSize: '1.24rem'}}
                    >
                        Register
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text 
                        style={{
                            fontFamily: 'Poppins', 
                            fontWeight: '500', 
                            fontSize: '1rem',
                            display: 'flex',
                            gap: '4px',
                            color: '#fff',
                            marginTop: '3rem'}}
                    >
                        Already have an account?
                        <Text
                            onPress={() => navigation.navigate("login")}
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '600', 
                                fontSize: '1rem',
                                textDecorationLine: '',
                                color: 'black'}}
                        >
                            Login
                        </Text>
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080708',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF902B',
        borderRadius: '12px',
        width: '180px',
        maxHeight: '50px',
        marginTop: '5rem'
    },
    box: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        padding: '24px',
        borderRadius: '24px',
        borderBottomLeftRadius: '0',

        
        borderBottomRightRadius: '0',
        width: '100vw',
        height: '90vh',
        paddingTop: '80px',
        backgroundColor: '#786452'

    },
    inputs: {
        width: "80%",
        maxHeight: '50rem',
        flex: 1,
        justifyContent: 'center', 
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#080708",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        borderRadius: '12px',
        padding: '15px',
        fontSize: '1rem'
    },
    check: {
        backgroundColor: 'FF902B',
        color: 'FF902B',
        width: '100%'
    }
   
});