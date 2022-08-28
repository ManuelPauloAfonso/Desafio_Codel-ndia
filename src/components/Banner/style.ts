import bannerImg from '../../assets/wallpaper.png'

import styled from "styled-components";

export const Container = styled.section`


height: 40rem;
background-image: url(${bannerImg});


.container-text{
    color:  #F9F9F9;
    padding: 9.75rem 15rem;

    p{
        max-width: 477px;
        font-style: italic;
        line-height: 160%;
        font-size: 1.5rem;
    }
    h1{
        font-size: 4.875rem;
        font-style: italic;
        font-weight: 700;
    }
    button{
        width: 10rem;
        height: 2rem;
        
        background: #DA2535;
        border-radius: 4px;
        color:  #F9F9F9;
        border: none;
        margin-top: 2rem;
        font-weight: 600;
    }
}
@media (max-width: 768px) {

    height: 55rem;

    .container-text{
        padding: 15rem 1.5rem;
        button{
            width: 19.5rem;
            height: 3rem;
            font-weight: 600;
        }

        h1{
            font-size: 2.5rem;
        }
    }
    
    
}
`