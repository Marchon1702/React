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
  background-color: #041D3D;

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
    cursor: pointer;
  }

`

const Imagens = ({foto, expandida = false, aoZoomAplicado, aoAlternarFavorito }) => {   

    return (
        <ImagensStyles $expandida={expandida}>
            <img src={ foto.path } alt={ foto.titulo } />
            <figcaption>
                <header>
                    <h3> { foto.titulo } </h3>
                    <p> { foto.fonte } </p>
                </header>
                <footer>
                    <button onClick={() => aoAlternarFavorito(foto)}>
                    {foto.favorito ? <IoMdHeart/> : <IoIosHeartEmpty />}                      
                    </button>
                    {!expandida && <button> <CgExpand onClick={() => aoZoomAplicado(foto)} /> </button>}
                </footer>
            </figcaption>
        </ImagensStyles>
    )
}

export default Imagens