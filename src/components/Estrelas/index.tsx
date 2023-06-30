import { View, StyleSheet } from 'react-native';
import { Image } from 'native-base';

import EstrelaIMG from '../../assets/estrela-amarela.png';
import EstrelaCinzaIMG from '../../assets/estrela-cinza.png';

interface IEstrela {
    nota:number
}

export default function Estrelas({ nota }: IEstrela) {
    nota = Math.ceil(nota)
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
        if (i + 1 <= nota) {
            listaEstrelas.push(
                {
                    id: i,
                    imagem: EstrelaIMG
                }
            );
        } else {
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