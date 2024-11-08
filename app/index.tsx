import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import axios from "axios";
import Toast from 'react-native-toast-message'
import Estilo from '../assets/style/geral'
import { TextInput } from "react-native-gesture-handler";
import Principal from './principal'
import { useRouter } from "expo-router";

export default function Index() {
  const [loginUser, setLoginUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const entrar = async () => {
    await router.push('/principal');
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        loginuser: loginUser,
        password: password,
        headers: {'Authorization': '1',}
      });
      console.log('data:',response.data);
      Toast.show({
        type: 'success',
        text1: 'Login com sucesso',
        visibilityTime: 3000,
        position: 'bottom'
      });
      setIsLoggedIn(true);

    } catch (error) {
      console.error('Error ao fazer o login', error);
      Toast.show({
        type: 'error',
        text1:'O usuário ou senha errada.',
        visibilityTime: 3000,
        position: 'bottom'
      });
    }
  }
  if (isLoggedIn){
    //return <Principal />
    entrar();
  }
  return (
    <SafeAreaView style={Estilo.container} >
      <TextInput
        style={Estilo.input}
        placeholder="Nome de usuário"
        value={loginUser}
        onChangeText={setLoginUser} />
      <TextInput
        style={Estilo.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
      <Toast />
    </SafeAreaView>
  );
}
