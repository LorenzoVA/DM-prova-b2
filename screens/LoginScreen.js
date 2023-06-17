import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <h1>Bem Vindo</h1>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Não tem uma conta? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
                    <Text style={styles.footerLink}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('RecuperarSenha')}>
                <Text style={styles.footerLink}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#333',
    },
    footerLink: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: 'bold',
    },
});