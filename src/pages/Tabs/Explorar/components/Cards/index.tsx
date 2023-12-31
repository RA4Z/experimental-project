import { VStack } from "native-base";
import { Titulo } from "../../../../../components/Titulo";

import IconeHomem from '../../../../../assets/homem.png';
import IconeMulher from '../../../../../assets/mulher.png';

import { usuarios } from "../../../../../utils/Usuarios";
import { exercicios } from "../../../../../utils/Exercicios";
import { alongamentos } from "../../../../../utils/Alongamentos";

import CardPesquisa from "../../../../../components/CardPesquisa";

interface ICards {
    navigation: any,
    exercicios: typeof exercicios,
    users: typeof usuarios,
    alongamentos: typeof alongamentos,
    filtro: string
}

export default function Cards({ navigation, exercicios, users, alongamentos, filtro }: ICards) {
    return (
        <VStack p={5}>
            {(exercicios.length == 0 && filtro == 'Exercício') && <Titulo>Nada encontrado</Titulo>}
            {(users.length == 0 && filtro == 'Usuário') && <Titulo>Nada encontrado</Titulo>}
            {(alongamentos.length == 0 && filtro == 'Alongamento') && <Titulo>Nada encontrado</Titulo>}

            {(filtro == 'Exercício') && exercicios?.map(exercicio => {
                return (
                    <CardPesquisa
                        name={exercicio.name}
                        key={exercicio.id}
                        image={exercicio.image}
                        description={exercicio.description}
                        action={() => navigation.navigate('Exercicio', { exercicio })} />
                )
            })}

            {(filtro == 'Alongamento') && alongamentos?.map(alongamento => {
                return (
                    <CardPesquisa
                        name={alongamento.name}
                        key={alongamento.id}
                        image={alongamento.image}
                        description={alongamento.description}
                        action={() => navigation.navigate('Alongamento', { alongamento })} />
                )
            })}

            {(filtro == 'Usuário') && users?.map(usuario => {
                return (
                    <CardPesquisa
                        name={usuario.name}
                        key={usuario.id}
                        premium={usuario.premium}
                        image={usuario.linkImagem == '' ? (usuario.genero == 'Masculino' ? IconeHomem : IconeMulher) : usuario.linkImagem}
                        imageWeb={usuario.linkImagem == '' ? false : true}
                        description={usuario.cargo}
                        action={() => navigation.navigate('User', { usuario })} />
                )
            })}
        </VStack>
    )
}