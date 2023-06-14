import React, { useState } from "react";
import { VStack, Text, Box, Link } from "native-base";
import { TouchableOpacity } from "react-native";

import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import { Botao } from "../../components/Botao";
import Logo from "../../components/Logo";

export default function Login({navigation}: any) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function entrar() {
        navigation.navigate('Tabs')
    }
    return (
        <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
            <Logo width={150} height={150} />
            <Titulo>Faça Login em sua Conta</Titulo>
            <Box>
                <InputTexto placeholder="Insira seu E-mail" label='E-mail' value={email} onChangeText={setEmail} />
                <InputTexto placeholder="Insira sua Senha" label='Senha' value={senha} onChangeText={setSenha} secureTextEntry={true} />
            </Box>
            <Botao onPress={entrar}>Entrar</Botao>
            <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
                <Text mt={2} color='blue.800'> 
                    Esqueci minha senha
                </Text>
            </TouchableOpacity>
            <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
                <Text color='blue.500'> 
                    Faça seu cadastro!
                </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}