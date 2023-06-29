import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Avatar, Image } from 'native-base';
import { useState } from 'react';

import HomemIMG from '../../../../../../../assets/homem.png';
import MulherIMG from '../../../../../../../assets/mulher.png';
import SetaIMG from '../../../assets/seta.png';
import { styles } from "../styles";
import { usuarios } from "../../../../../../../utils/Usuarios";
import CalculoIdadeUsuario from "../../../../../../../services/CalculoIdadeUsuario";
import Estrelas from "./Estrelas";

export default function Personal({ onPress, id, expandir = false }: any) {
    const estilos = estilosSeta(expandir)
    const personal = usuarios[id - 1]
    const idadeAtualPersonal = CalculoIdadeUsuario(personal.nascimento)
    return (
        <View>
            <TouchableOpacity style={styles.card} key={id} onPress={onPress} >
                <View style={styles.card}>
                    {personal.linkImagem != '' ?
                        <Avatar style={styles.imagemCard} source={{ uri: `${personal.linkImagem}` }} />
                        :
                        <Image source={personal.genero == 'Feminino' ? MulherIMG : HomemIMG} style={styles.imagemCard} alt='Imagem do Personal' />
                    }
                    <Text style={styles.textos}>
                        {personal.name}
                    </Text>
                    <Image source={SetaIMG} style={estilos.setaOpcao} alt='Seta Opções' />
                </View>
            </TouchableOpacity>
            {expandir ?
                <View style={estilos.blocoInfoPersonal}>
                    <Text>{personal.cidade}, {personal.estado} - {personal.pais}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{idadeAtualPersonal} anos</Text>
                        <Text>Entrou em: {personal.entrada}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{personal.alunos} alunos</Text>
                        <View style={{flexDirection:'row'}}>
                            <Estrelas nota={personal.nota} />
                        </View>
                    </View>

                </View>
                :
                ''}
        </View>
    )
}
const estilosSeta = (expandir: boolean) => StyleSheet.create({
    setaOpcao: {
        width: 20,
        height: 20,
        transform: expandir ? [{ rotate: '0deg' }] : [{ rotate: '-90deg' }]
    },
    blocoInfoPersonal: {
        backgroundColor: 'white',
        height: 'auto',
        padding: 10,
        width: '100%',
    }
})