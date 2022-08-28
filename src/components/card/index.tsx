import { Container } from "./style";
import img1 from '../../assets/img.png'
import img2 from '../../assets/img (1).png'
import img3 from '../../assets/img (2).png'




export default function Card(){
    return(
        <Container>
            <div className="container">
                <h1>ULTIMAS NOTÍCIAS</h1>
                <div className="card">
                       
                    <div className="cards1">

                        <img src={img1} alt="" />
                        <div className="p">
                            <span className="span1">EQUIPE PRINCIPAL</span>
                            <span className="span2">17 Maio 2022</span>
                        </div>
                        <p>Messi deseja comprar 35% das ações de clube.</p>
                    </div>
                    <div className="cards1">

                        <img src={img2} alt="" />
                        <div className="p">
                            <span className="span1">EQUIPE PRINCIPAL</span>
                            <span className="span2">17 Maio 2022</span>
                        </div>
                        <p>Tudo sobre a vitória em Montpellier.</p>
                    </div>
                    <div className="cards1">

                        <img src={img3} alt="" />
                        <div className="p">
                            <span className="span1">EQUIPE PRINCIPAL</span>
                            <span className="span2">17 Maio 2022</span>
                        </div>
                        <p>Mbappé no Liverpool?.</p>
                    </div>

                   
                </div>
                <div className="btn">
                     <button>CARREGAR MAIS</button>
                </div>
            </div>
        </Container>
    )
}