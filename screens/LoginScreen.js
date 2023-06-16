import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen( { navigation }){

  return (
    <View>
      <Text>Tela de Login</Text>
      <Button title='logar' onPress={()=>navigation.navigate('Dashboard')}/>
    </View>
  );
}


