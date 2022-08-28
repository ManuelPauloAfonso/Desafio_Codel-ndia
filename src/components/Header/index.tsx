import { Container } from "./style";
import logo from '../../assets/psg logo.svg'
import menu from '../../assets/align-right.svg'



export default function Header(){
    return(
        <Container>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><a href=""> inicios</a></li>
                    <li><a href="">resultados</a></li>
                    <li><a href="">Noticias</a></li>
                    <li><a href=""> Clubes</a></li>
                    <li><a href="">lojas</a></li>
                </ul>
            </nav>
            <div className="button-flex">
                <a href="">Entrar</a>
                <button className="btn2">Registra-se</button>
            </div>
            <button className="btn">
                Menu
                <img src={menu} alt="" />
            </button>
        </Container>
    )
}