import { View, StyleSheet } from 'react-native';
import { Image } from 'native-base';

import EstrelaIMG from '../../../assets/estrela-amarela.png';
import EstrelaCinzaIMG from '../../../assets/estrelaCinza.png';

export default function Estrelas({ nota }: any) {
    console.log(nota)
    const listaEstrelas = [];
    for (let i = 0; i < nota; i++) {
        listaEstrelas.push(
            {
                id: i,
                imagem: EstrelaIMG
            }
            
        );
    }
    if (nota < 5) {
        for (let i = nota; i < 5; i++) {
            listaEstrelas.push(
                {
                    id: i,
                    imagem: EstrelaCinzaIMG
                }
            );
        }
    }

    return (
        <View style={styles.estrelas}>
            {listaEstrelas.map(estrela => (
                <Image style={styles.estrela} source={estrela.imagem} alt='Estrela' key={estrela.id} />
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
    estrela: {
        width: 24,
        height: 24,
        marginRight: 2
    }
})