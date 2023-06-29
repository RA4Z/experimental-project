import { Avatar, Image } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';

import HomemIMG from '../../../../../../assets/homem.png';
import MulherIMG from '../../../../../../assets/mulher.png';
import SetaIMG from '../../assets/seta.png';

import MapaIMG from '../../assets/mapa.png';
import EntrouIMG from '../../assets/cadastro.png';

import { usuarios } from '../../../../../../utils/Usuarios';
import { cards } from './Cards';
import CalculoIdadeUsuario from '../../../../../../services/CalculoIdadeUsuario';
import { styles } from './styles';
import Personal from './components/Personal';

export default function CardOpcoes({ abaAtual, route }: any) {
    const infoNecessarias = route?.params?.usuario;

    const idadeAtualUsuario = CalculoIdadeUsuario(infoNecessarias.nascimento)
    const ImagemGenero = infoNecessarias.genero == 'Feminino' ? MulherIMG : HomemIMG;


    return (
        <View style={styles.main}>

            {abaAtual == 'Perfil' && cards[0]?.info.map(card => (
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

            {abaAtual == 'AbaCentral' &&
                <TouchableOpacity style={styles.card}>
                    <View style={styles.card}>
                    </View>
                </TouchableOpacity>
            }

            {abaAtual == 'Bio' &&
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
                            <Image source={MapaIMG} style={[styles.imagemCard, { opacity: 0 }]} alt='Nada' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.card}>
                            <Image source={EntrouIMG} style={styles.imagemCard} alt='Imagem de Entrada' />
                            <Text style={styles.textos}>
                                Entrou em: {infoNecessarias.entrada}
                            </Text>
                            <Image source={EntrouIMG} style={[styles.imagemCard, { opacity: 0 }]} alt='Nada' />
                        </View>
                    </TouchableOpacity>

                    {infoNecessarias.personal > 0 &&
                        <Personal id={infoNecessarias.personal} />}
                </>
            }

        </View >
    )
}