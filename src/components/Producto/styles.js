import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 12px;
`

export const Panel = styled.div`
background-color: var(--white);
box-shadow: var(--panel);
display: grid;
grid-template-columns: 67fr 33fr;
`

export const Column = styled.div``

export const Galeria = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 530px;

>img{
    height: 75%
}
`



export const ProductoVenta = styled.div``

export const InfoVendedor = styled.div``

export const Description = styled.div`
border-top: 1px solid var(--border);
width: 88%;
margin: 0 auto;
padding: 40px 0;
>h5{
    color: var(--text1);
    font-size: 24px;
    margin-bottom: 32px;
    line-height: 30px;
}
>p, span{
    line-height: 20px
    font-size: 20px;
    color: var(--text3);
}
>hr{
    border-top: 1px solid var(--text2);
}
`

export const Section = styled.div`
padding: 32px 16px;
margin: 0 16px;
border: 1px solid var(--border);
border-bottom: none;
>h5{
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5px;
}
>div{
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    >span{
       margin-bottom: 24px;

    }
    .title{
        font-size: 16px;
        color: var(--text1);
        line-height: 21.6px;
        margin-bottom: 12px;
    }
    .description{
        font-size: 14px;
        color: var(--text2);
    }
    >a{
        font-size: 14px;
        color: var(--blue3);
        text-decoration: none;
    }
}
`