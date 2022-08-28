import Banner from "../components/Banner";
import Banner2 from "../components/banner2";
import Card from "../components/card";
import Footer from "../components/Footer";
import Placar from "../components/Placar";



export default  function Home() {
    return(
        <>
           
           <Banner />
           <Placar />
           <Banner2 />
           <Card />
           <Footer />
        
        </>
    )
}