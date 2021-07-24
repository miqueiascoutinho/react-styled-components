import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components';
import { corPrimaria } from '../UI/variaveis'

const Navegation = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Img = styled.img`
  height: 50px;
  width: 50px;
`
const BtnMenu = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${(props) => (props.primary ? "white" : corPrimaria)};
  background: ${(props) => (props.primary ? corPrimaria : "white")};
`
const Cabecalho = () => {
  return (
    <Navegation>
      <Img src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnMenu href="https://google.com">
          Ajuda
        </BtnMenu>
        <BtnMenu  primary href="https://google.com">
          Sair
        </BtnMenu>
      </div>
    </Navegation>
  );
};

export default Cabecalho;
