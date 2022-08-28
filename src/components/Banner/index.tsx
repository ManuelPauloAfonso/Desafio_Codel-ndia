import Header from "../Header";
import { Container } from "./style";

export default function Banner(){
    return(
        <Container>
            <Header />
            <div className="container-text">
                <h1>Neymar JR</h1>
                 <p>“Tenho Messi e Cristiano Ronaldo como ídolos. Se der para pegar um pouquinho de cada um, fico muito feliz.”</p>
                 <button>Ler Materia</button>
            </div>
        </Container>
    )
}