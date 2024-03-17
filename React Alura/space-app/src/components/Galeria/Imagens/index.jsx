import React from 'react';
import styled from 'styled-components';
import { CgExpand } from "react-icons/cg";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";


const ImagensStyles = styled.figure`
  display: inline-block;
  width: ${ props => (props.$expandida ? '90%' : '350px')};
  height: 330px;
  border-radius: 20px;
  box-shadow: 1px 4px 5px #00000026;
  color: #D9D9D9;

  img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    line-height: 24px;
  }

  h3, p, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-wrap: nowrap;
  }

  button {
    color: #D9D9D9;
    background-color: transparent;
    border: none;
    font-weight: 400;
    font-size: 1.7em;
    margin: 0px 4px;
  }

`

const Imagens = ({ endereco, descricao, fonte }) => {
    return (
        <ImagensStyles>
            <img src={ endereco } alt={ descricao } />
            <figcaption>
                <header>
                    <h3> { descricao } </h3>
                    <p> { fonte } </p>
                </header>
                <footer>
                    <button> <IoIosHeartEmpty /> </button>
                    <button> <CgExpand /> </button>
                </footer>
            </figcaption>
        </ImagensStyles>
    )
}

export default Imagens