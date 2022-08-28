import styled from "styled-components";

import bannerImg from '../../assets/wallapaper2.png'

export const Container = styled.section`


height: 40rem;
background-image: url(${bannerImg});
margin-top: 8.438rem;
display: flex;
justify-content: center;

.container-form{
    width: 60rem;
    height: 28.063rem;
    background: #F9F9F9;
    margin-top: 7rem;
    padding: 2.5rem;

    p{
        color: #515151;
        font-size: 1rem;
        line-height: 170%;
        font-weight: 400;
        max-width: 940px;
        margin-top: 1rem;

    }
    a{
        color: #DA2535;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 22px;
        margin-top: 2.25rem;
    }
   
}

@media (max-width: 768px) {

    height: 58rem;
    padding: 1.5rem;

    .container-form{
        width: 30rem;
        height: 45rem;
       
    }

}
`