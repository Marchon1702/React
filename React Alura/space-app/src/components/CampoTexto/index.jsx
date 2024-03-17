import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const CampoTextoStyle = styled.div`
  input {
    width: 40vw;

    font-size: 1.1em;

    margin-right: 24px;
    padding: 12px 16px;

    background-color: #0000001a;
    color: #ffff;

    border: 2px solid #C98CF1;
    border-radius: 10px;
  }

  .search-icon {
    font-size: 1.8em;

    position: absolute;
    transform: translate(-70px, 8px);   
    
    color: #C98CF1;

    cursor: pointer;
  }

`;

const CampoTexto = () => {
  return (
    <CampoTextoStyle>
      <input type="text" placeholder={`O que você procura?`}/>
      <CiSearch className="search-icon"/>
    </CampoTextoStyle>
  );
};

export default CampoTexto;
