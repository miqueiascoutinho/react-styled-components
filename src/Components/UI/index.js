import styled from 'styled-components';
import {corPrimaria} from './variaveis';


export const Box = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({theme}) => theme.inside};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 48%;

    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
    }    
`

export const Saldo = styled.div`
    font-size: 32px;
    font-weight: 700;
`

export const Detalhe = styled.span`
    font-size: 24px;
    color: ${corPrimaria}
`

export const Icone = styled.img`
    width: 25px;
    height: 25px;
`
export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const Botao = styled.button`
    background: ${corPrimaria};
    margin: 15px auto 0px auto;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 20px;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    display: block;    
`

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;