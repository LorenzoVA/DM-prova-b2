import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default function RecuperacaoSenhaScreen(){
    return(
        <View style={styles.container}>
            <h1>Recupere sua Senha</h1>
            <TextInput style={styles.input} placeholder="Digite uma nova Senha" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Digite Novamente sua nova Senha" secureTextEntry={true} />
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Trocar a Senha</Text>
            </TouchableOpacity>
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
});