import BatePapoIMG from '../../assets/bate-papo.png';
import AvaliarIMG from '../../assets/avalie.png';
import PropostaIMG from '../../assets/convite.png';


const cards = [
    {
        id: 1,
        aba: 'Perfil',
        info: [
            {
                id: 1,
                text: 'Enviar uma mensagem',
                image: BatePapoIMG
            },
            {
                id: 2,
                text: 'Avaliar este usuário',
                image: AvaliarIMG
            },
            {
                id: 3,
                text: 'Enviar proposta',
                image: PropostaIMG
            }
        ]
    }
]

export { cards }