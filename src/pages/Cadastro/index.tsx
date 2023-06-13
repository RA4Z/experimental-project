import { VStack, Text } from "native-base";
import React, { useState } from "react";
import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import Logo from "../../components/Logo";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    return (
        <VStack flex={1} alignItems="center" justifyContent='flex-start' p={5}>
            <Logo height={200} width={200} />
            <Titulo>Por favor, nos diga como podemos lhe chamar...</Titulo>
            <InputTexto placeholder='Nome de usuário' value={nome} onChangeText={setNome}  />
        </VStack>
    )
}