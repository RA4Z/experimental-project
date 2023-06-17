import { VStack, useToast, Select, ScrollView } from "native-base";
import React, { useState } from "react";
import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import Logo from "../../components/Logo";
import { Botao } from "../../components/Botao";

import { secoes } from '../../utils/CadastroInputs';
import { Alert } from "react-native";

export default function Cadastro({navigation}: any) {
    const [username, setUsername] = useState('')
    const [dados, setDados] = useState({} as any)
    const [secao, setSecao] = useState(0)
    const toast = useToast()

    function avancarSecao() {
        if(secao == 0 && username == '') {
            toast.show({
              title: 'Nome de usuário em branco', 
              description: 'O nome de usuário não pode estar em branco!', 
              backgroundColor: 'red.500',
              marginRight: 5,
              marginLeft: 5
            })
            return
        }
        if(secao == 1){
            Alert.alert('Usuário cadastrado com sucesso!')
            navigation.goBack()
        }
        setSecao(secao + 1)
    }

    function atualizarDados(id: string, valor: string) {
        setDados({...dados, [id]: valor})
      }

    return (
        <ScrollView>
            <VStack flex={1} alignItems="center" justifyContent='flex-start' p={5}>

                {secao == 0 && <>
                    <Logo height={150} width={150} />
                    <Titulo>Por favor, nos diga como podemos lhe chamar...</Titulo>
                    <InputTexto placeholder='Nome de usuário' value={username} onChangeText={setUsername}  /> 
                </>}

                {secao == 1 && <>
                    <Titulo>Olá {username}, pedimos que insira alguns dados sobre você</Titulo>
                    {secoes[0]?.entradaTexto.map(entrada => {
                        return (
                            <>
                                {entrada.tipoInput != 'Select' ? <InputTexto 
                                    key={entrada.id} 
                                    placeholder={entrada.placeholder}
                                    label={entrada.label}
                                    value={dados[entrada.name]}
                                    secureTextEntry={entrada.secureTextEntry}
                                    onChangeText={(text) => atualizarDados(entrada.name, text)}
                                /> :
                                <Select
                                    placeholder={entrada.placeholder}
                                    key={entrada.id} 
                                    selectedValue={dados[entrada.name]}
                                    width={200}
                                    mt={5}
                                    onValueChange={(itemValue: string) => atualizarDados(entrada.name, itemValue)}
                                >
                                    <Select.Item label="Masculino" value="Masculino" />
                                    <Select.Item label="Feminino" value="Feminino" />
                                    <Select.Item label="Outro" value="Outro" />
                                </Select>}
                            </>
                        )
                    })}
                </>}
                <Botao onPress={avancarSecao}>{secao == 1 ? 'Concluir' : 'Avançar'}</Botao>
            </VStack>
        </ScrollView>
    )
}