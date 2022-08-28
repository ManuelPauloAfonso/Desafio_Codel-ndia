

import styled from "styled-components";



export const Container = styled.section`

display: flex;
justify-content: center;
align-items: center;
gap: 2.125rem;
margin-top: 8.438rem;


span{
    line-height: 39px;
    color: #0B1421;
    font-weight: 600;
    font-size: 2rem;
}

.placar-time{
    display: flex;
    gap: 1rem;
}

@media (max-width: 768px) {

    img{
        width: 5rem;
        height: 5rem;
    }
    span{

    }
    .time{
        display: none;
    }
    
}

`