
import MaquinaReta from '../assets/Exercicios/maquina-reta.png';
import MaquinaInclinada from '../assets/Exercicios/maquina-inclinada.png';
import MaquinaPesos from '../assets/Exercicios/pesos.png';

import CadeiraAbdomen from '../assets/Exercicios/abdominal.png';

import BarraPesada from '../assets/Exercicios/barra-pesada.png';
import BarraNormal from '../assets/Exercicios/barra.png';

const exercicios = [
    {
        id: 1,
        name: 'Supino',
        description: 'Ergue o peso estando deitado',
        muscle: 'Peitoral central',
        member: 'Peito',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: MaquinaReta
    },
    {
        id: 2,
        name: 'Agachamento',
        description: 'Agacha com o peso',
        muscle: 'Superior da coxa',
        member: 'Pernas',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: BarraPesada
    },
    {
        id: 3,
        name: 'Extensora',
        description: 'Empurrar os pesos com a perna',
        muscle: 'Quadríceps',
        member: 'Pernas',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: MaquinaPesos
    },
    {
        id: 4,
        name: 'Supino Inclinado',
        description: 'Supino porém inclinado',
        muscle: 'Peitoral superior',
        member: 'Peito',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: MaquinaInclinada
    },
    {
        id: 5,
        name: 'Barra',
        description: 'Erguer barra com bíceps',
        muscle: 'Bíceps',
        member: 'Braços',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: BarraNormal
    },
    {
        id: 6,
        name: 'Abdômen inclinado',
        description: 'Levantar com a força do abdômen',
        muscle: 'Abdômen central',
        member: 'Abdômen',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dolor nec sodales lacinia. Donec blandit neque sit amet ex dapibus blandit. Aliquam egestas, arcu vel accumsan porta, mauris augue aliquam arcu, id lobortis arcu ante id mi. Donec fringilla pulvinar lorem pretium blandit. Quisque mollis nec nunc vitae luctus. ',
        image: CadeiraAbdomen
    }
  ]
  export { exercicios }