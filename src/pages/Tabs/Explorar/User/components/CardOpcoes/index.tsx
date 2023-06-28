import { Image } from 'native-base';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import HomemIMG from '../../../../../../assets/homem.png';
import MulherIMG from '../../../../../../assets/mulher.png';

import MapaIMG from '../../assets/mapa.png';
import EntrouIMG from '../../assets/cadastro.png';

import { cards } from './Cards';
import CalculoIdadeUsuario from '../../../../../../services/CalculoIdadeUsuario';

export default function CardOpcoes({ abaAtual, route }: any) {
    const [numeroAba, setNumeroAba] = useState(0);
    const infoNecessarias = route?.params?.usuario;
    const idadeAtualUsuario = CalculoIdadeUsuario(infoNecessarias.nascimento)

    const ImagemGenero = infoNecessarias.genero == 'Feminino' ? MulherIMG : HomemIMG;

    useEffect(() => {
        if (abaAtual == 'Perfil') {
            setNumeroAba(0)
        } else if (abaAtual == 'Bio') {
            setNumeroAba(2);
        } else setNumeroAba(1)
    }, [abaAtual])

    return (
        <View style={{ alignItems: 'center', padding: 20, rowGap: 15 }}>

            {cards[numeroAba]?.info.map(card => (
                <TouchableOpacity style={styles.card}>
                    <View style={styles.card} key={card.id}>
                        <Image source={card.image} style={styles.imagemCard} alt={card.id.toString()} />
                        <Text style={styles.heading}>
                            {card.text}
                        </Text>
                        <Image source={card.image} style={[styles.imagemCard, { opacity: 0 }]} alt={card.id.toString()} />
                    </View>
                </TouchableOpacity>
            ))}

            {numeroAba == 1 &&
                <TouchableOpacity style={styles.card}>
                    <View style={styles.card}>
                    </View>
                </TouchableOpacity>
            }

            {numeroAba == 2 &&
                <>
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.card}>
                            <Image source={ImagemGenero} style={styles.imagemCard} alt='Imagem de Pessoa' />
                            <Text style={styles.textos}>
                                {idadeAtualUsuario} anos
                            </Text>
                            <Text style={styles.textos}>
                                IMC: {infoNecessarias.imcAtual}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.card}>
                            <Image source={MapaIMG} style={styles.imagemCard} alt='Imagem de Mapa' />
                            <Text style={styles.textos}>
                                {infoNecessarias.cidade},{'\n'}{infoNecessarias.estado} - {infoNecessarias.pais}
                            </Text>
                            <Image source={MapaIMG} style={[styles.imagemCard, { opacity: 0 }]} alt='Imagem de Mapa' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.card}>
                            <Image source={EntrouIMG} style={styles.imagemCard} alt='Imagem de Mapa' />
                            <Text style={styles.textos}>
                                Entrou em: {infoNecessarias.entrada}
                            </Text>
                            <Image source={EntrouIMG} style={[styles.imagemCard, { opacity: 0 }]} alt='Imagem de Mapa' />
                        </View>
                    </TouchableOpacity>
                </>
            }

        </View >
    )
}
const styles = StyleSheet.create({
    textos: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 5
    },
    heading: {
        fontSize: 15,
        textAlign: 'center',
        maxWidth: 150
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 65,
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagemCard: {
        height: 65,
        width: 65,
    }
});