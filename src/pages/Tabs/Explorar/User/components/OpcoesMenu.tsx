import { useState, useEffect } from 'react';
import { Divider } from "native-base";
import { TouchableOpacity, View, Text } from "react-native";

interface IOpcoesMenu {
    cargo:string;
    onEnviarValor:any;
}

export default function OpcoesMenu({cargo, onEnviarValor}:IOpcoesMenu) {
    const [aba, setAba] = useState('Perfil')
    
    function mudarAbaAtual(abaSelecionada:string) {
        onEnviarValor(abaSelecionada);
        setAba(abaSelecionada)
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, padding: 5 }}>
            <TouchableOpacity onPress={() => mudarAbaAtual('Perfil')}>
                <Text style={{ color: aba == 'Perfil' ? '#00BCE5' : 'black' }}>Perfil</Text>
            </TouchableOpacity>

            <Divider style={{ width: 1, height: 30 }} />

            <TouchableOpacity onPress={() => mudarAbaAtual('AbaCentral')}>
                <Text style={{ color: aba == 'AbaCentral' ? '#00BCE5' : 'black' }}>{cargo == 'Professor' ? 'Alunos' : 'Folha de Treino'}</Text>
            </TouchableOpacity>

            <Divider style={{ width: 1, height: 30 }} />

            <TouchableOpacity onPress={() => mudarAbaAtual('Bio')}>
                <Text style={{ color: aba == 'Bio' ? '#00BCE5' : 'black' }}>Bio</Text>
            </TouchableOpacity>
        </View>
    )
}