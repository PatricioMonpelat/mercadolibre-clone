import styled from "styled-components";

import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import { IoTrophyOutline } from "react-icons/io5";

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 32px 16px;
margin: 16px;
border: 1px solid var(--border);
border-radius: 5px;
`

export const Estado = styled.div`
font-size: 14px;
margin-bottom: 10px;
color: var(--text2);
`

export const Row = styled.div`
display: flex;
justify-content: space-between;
>h1{
    width: 100%;
    font-size: 22px;
    line-height: 25.9px;
    color: var(--text1);
    font-weight: 500;
}
`

export const HeartIcon = styled(HiOutlineHeart)`
width: 30px;
height: 30px;
color: var(--blue1);
cursor: pointer;
margin-left: 16px;
`

export const Card = styled.div`
display: flex;
margin-bottom: 2rem;
>div{
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    .title{
        font-size: 16px;
        margin-top: 5px;
        color: var(--green);
    }
    .detalle{
        font-size: 14px;
        margin-top: 5px;
        color: var(--text2);
    }
    .more{
        font-size: 14px;
        margin-top: 5px;
        text-decoration: none;
        color: var(--blue2);
        line-height: 18.9px;
    }
}
`

export const CheckIcon = styled(HiOutlineCheck)`
width: 24px;
height: 24px;
color: var(--green);
`

export const Price = styled.div`
font-size: 36px;
line-height: 36px;
padding: 24px 0;
font-weight: inherit;
color: var(--text1);
`

export const Color = styled.div`
font-size: 16px;
color: var(--text1);
padding-top: 1rem;
`

export const Cantidad = styled.div`
margin-top: 3rem;
display: flex;
justify-content: start;
align-items: center;
color: var(--text1);
font-size: 16px;
>span{
    color: var(--text2);
    margin: 0 .5rem;
}
>strong{
    margin: 0 .5rem;
}
>input{
    width: 20px;
    color: var(--blue1);
    border-left: 1px solid var(--blue1);
    border-right: 1px solid var(--blue1);
    outline: 0;
}
`

export const ButtonCard = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
`

export const Button = styled.div`
margin-top: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
border-radius: 4px;
padding: 12px 10px;
outline: 0;
cursor: pointer;
background-color: #4189e626;
color: var(--blue1);
transition: all 300ms ease-in-out;
&.solid{
    background-color: var(--blue3);
    color: var(--white);
}
&.solid:hover{
    background-color: var(--blue2);
}
`

export const Beneficios = styled.div`
margin-top: 16px;
list-style: none;
display: flex;
flex-direction: column;
>li{
    display: flex;
    margin-top: 1rem;
    p{
        margin-left: 10px;
        font-size: 14px;
        color: var(--blue1);
        span{
            color: var(--text2);
        }
    }
}
`

export const ShieldIcon = styled(HiOutlineShieldCheck)`
width: 28px;
height: 20px;
opacity: .45;
margin-top: -.1rem
`

export const CopaIcon = styled(IoTrophyOutline)`
width: 20px;
height: 20px;
opacity: .45;
margin-top: -.1rem
`
