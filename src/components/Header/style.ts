

import styled from "styled-components";



export const Container = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 15rem;


ul{
    display: flex;
    align-items: center;
    gap: 3rem;
    
}
.btn{
    display: none;
}

.button-flex{
    display: flex;
    align-items: center;
    gap: 3.188rem;
}
.btn2{
        width: 10rem;
        height: 2rem;
        
        background: #DA2535;
        border-radius: 4px;
        color:  #F9F9F9;
        border: none;
       
       
}

/* responsive */

@media (max-width: 768px) {


    padding: 1.5rem 1.5rem;
    align-items: center;


    ul{
        display: none;
    }
    .button-flex{
        display: none;
    }
    .btn{
        display: block;
        width: 6.563rem;
        height: 2.500rem;
        
        background: #DA2535;
        border-radius: 4px;
        color:  #F9F9F9;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #F9F9F9;

    }
    
}

`