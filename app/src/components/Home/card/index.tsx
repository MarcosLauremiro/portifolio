import { CardMeStyled } from "./style"
import foto from '../../../assets/miro.jpg'

export const CardMe = () => {
    return(
        <CardMeStyled id="HOME">
            <img src={foto} alt="pessoa" />
            <h1>Olá, Sou Lauremiro</h1>
        </CardMeStyled>
    )
}