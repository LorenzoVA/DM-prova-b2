import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';
import { Button } from 'react-native-web';

export default function DashboardScreen(){
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Cartões de Jogo</Text>
        <StatusBar style="auto"/>
        <Text style={styles.titulo2}>Espada</Text>
        <Image source={{
          uri: 'https://images.vexels.com/media/users/3/207337/isolated/preview/f04c7d67570ba29fb352d1ec2bd32e33-golpe-de-icone-colorido-de-espada.png'
        }} style={styles.img}/>
        <Text style={styles.desc}>Este é um item de ataque, serve para causar dano aos seus oponentes</Text>
        <Button
          title="Trocar"
        />
  
        <Text style={styles.titulo2}>Escudo</Text>
        <Image source={{
          uri: 'https://images.vexels.com/media/users/3/142810/isolated/lists/ba0c22cef0e0d4a277d74333536482d9-logotipo-do-emblema-do-escudo.png'
        }} style={styles.img}/>
        <Text style={styles.desc}>Este é um item de defesa, com ele você pode se defender dos ataques inimigos</Text>
        <Button
          title="Trocar"
        />
  
        <Text style={styles.titulo2}>Armadura</Text>
        <Image source={{
          uri: 'https://prints.ultracoloringpages.com/8dceb39dc03fae6559c5bba5b2ec7125.png'
        }} style={styles.img}/>
        <Text style={styles.desc}>Este é um item de defesa, com ele você leva menos dano do inimigos ao ser atingido</Text>
        <Button
          title="Trocar"
        />
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3d50c9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      color: 'white',
      fontSize: '60px',
      fontWeight: 'bold',
      padding: 20
      
    },
    titulo2: {
      color: 'white',
      fontSize: '40px',
      fontWeight: 'bold',
      padding: 25
    },
    img: {
      width: 150,
      height: 150,
      padding: 15
    },
    desc: {
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
      alignItems: 'center',
      padding: 15
    }
  });