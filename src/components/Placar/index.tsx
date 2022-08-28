import { Container } from "./style";
import img1 from '../../assets/montpellier-logo.svg'
import img2 from '../../assets/psg-logo.svg'



export default function Placar(){
    return(
        <Container>
            <span className="time">Monteplier</span>
            <img src={img1} alt="" />
            <div className="placar-time">
                <span>0</span>
                    <div></div>
                <span>4</span>
            </div>
           
            <img src={img2} alt="" />
            <span className="time">PSG</span>
        </Container>
    )
}