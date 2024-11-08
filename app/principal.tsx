import { Text, SafeAreaView, Button } from "react-native";
import Toast from 'react-native-toast-message'
import Estilo from '../assets/style/geral'

export default function Index() {
    const msg = async () => {
        Toast.show({
            type: 'success',
            text1: 'Login com sucesso',
            visibilityTime: 3000,
            position: 'bottom'
        });
    }
    msg();
    return (
        <SafeAreaView style={Estilo.container} >
            <Text>Principal</Text>
            <Toast />
        </SafeAreaView>
    );
}
