import { Box, VStack, Select, FormControl } from "native-base";
import { useState } from 'react';

import { Titulo } from "../../../components/Titulo";
import { Botao } from "../../../components/Botao";
import { InputTexto } from "../../../components/InputTexto";

export default function Explorar() {
    const [filtro, setFiltro] = useState('')

    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [membro, setMembro] = useState('')
    const [musculo, setMusculo] = useState('')


    return (
        <VStack p={5}>
            <FormControl alignItems='center' mt={5}>
                <FormControl.Label>Filtro Geral de Pesquisas</FormControl.Label>
                <Select
                    placeholder='Selecionar Filtro'
                    selectedValue={filtro}
                    width={200}
                    onValueChange={(itemValue: string) => setFiltro(itemValue)}
                >
                    <Select.Item label="Exercícios" value="Exercício" />
                    <Select.Item label="Alongamentos" value="Alongamento" />
                    <Select.Item label="Usuários" value="Usuário" />
                </Select>
            </FormControl>

            <VStack p={5}>
                { (filtro == 'Alongamento' || filtro == 'Exercício') && <>
                    <InputTexto 
                        placeholder={`Nome do membro corporal`}
                        label='Membro'
                        value={membro}
                        onChangeText={(text) => setMembro(text)}
                    />
                    <InputTexto 
                        placeholder={`Nome músculo alvo`}
                        label='Músculo'
                        value={musculo}
                        onChangeText={(text) => setMusculo(text)}
                    />
                    </>
                }
                {
                    filtro == 'Usuário' && <>
                    <InputTexto 
                        placeholder={`Nome da Cidade`}
                        label='Cidade'
                        value={cidade}
                        onChangeText={(text) => setCidade(text)}
                    />
                    <InputTexto 
                        placeholder={`Nome do Estado`}
                        label='Estado'
                        value={estado}
                        onChangeText={(text) => setEstado(text)}
                    />
                    </>
                }
                {filtro != '' && <InputTexto 
                    placeholder={`Nome do ${filtro}`}
                    label='Nome'
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                /> }
                
            </VStack>
        </VStack>
    )
}