import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Estilo from '../assets/style/geral';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';

export default function LoginOk() {
  const router = useRouter();

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Login successful!',
      visibilityTime: 3000,
    });
  }, []);

  return (
    <View style={Estilo.container}>
      <Text>Principal</Text>
      <Button title="Voltar" onPress={() => router.push('/')} />
      <Toast />
    </View>
  );
}