import styled from "styled-components"

export const Container = styled.section`
    
    display: flex;
    justify-content: center;
    margin-top: 7.813rem;

    .card{

        display: flex;
        margin-top: 3.5rem;
        gap: 1.25rem;
        flex-wrap: wrap;


        p{
            font-weight: 500;
            font-size: 1.25rem;
            line-height: 24px;

            color: #0B1421;
        }

    }
    .p{
        display: flex;
        gap: 11.313rem;
        margin-top: 1rem;



        .span1{
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 20px;
            color: #DA2535;
        }
        .span2{
            font-weight: 300;
            font-size: 0.875rem;
            line-height: 20px;
            
            color: rgba(11, 20, 33, 0.45);

        }
    }
    .btn{
        display: flex
        ;
        justify-content: center;
        margin-top: 4.75rem;
        
        button{
            background: #DA2535;
            border-radius: 4px;
            width: 10rem;
            height: 2rem;
        
            background: #DA2535;
            border-radius: 4px;
            color:  #F9F9F9;
            border: none;
        }
    }

@media (max-width: 768px) {



padding: 1.5rem;

img{
    width: 20rem;
   
    
}
.card{
    p{
        font-size: 0.875rem;
    }
}
.p{
    gap: 7.625rem;  

    .span1{
        font-size: 0.75rem;


    }
    .span2{
        font-size: 0.75rem;

    }
    
}


}
    

`