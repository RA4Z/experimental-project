import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Avatar, Image } from 'native-base';

import HomemIMG from '../../../../../../../assets/homem.png';
import MulherIMG from '../../../../../../../assets/mulher.png';
import SetaIMG from '../../../assets/seta.png';
import { styles } from "../styles";
import { usuarios } from "../../../../../../../utils/Usuarios";

export default function Personal({ id, expandir = false }: any) {
    return (
        <TouchableOpacity style={styles.card} key={id} onPress={() => expandir = true}>
            <View style={styles.card}>
                {usuarios[id - 1].linkImagem != '' ?
                    <Avatar style={styles.imagemCard} source={{ uri: `${usuarios[id - 1].linkImagem}` }} />
                    :
                    <Image source={usuarios[id - 1].genero == 'Feminino' ? MulherIMG : HomemIMG} style={styles.imagemCard} alt='Imagem do Personal' />
                }
                <Text style={styles.textos}>
                    {usuarios[id - 1].name}
                </Text>
                <Image source={SetaIMG} style={estilosSeta.setaOpcao} alt='Seta Opções' />
            </View>
        </TouchableOpacity>
    )
}
const estilosSeta = StyleSheet.create({
    setaOpcao: {
        width: 20,
        height: 20,
        transform: [{ rotate: '-90deg' }]
    }
})