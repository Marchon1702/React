import React from "react";
import Imagens from "../Galeria/Imagens";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  // criando fundo escuro "overlay"

  const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    // position fixed faz com que o elemento fique fixo independente do tamanho da tela
    position: fixed;
    // agora é como se estivessemos esticando a tela dizendo q a posição fixada em relação as extremidades da tela são proximas.
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    place-items: center;
  `;
  const DialogStyles = styled.dialog`
    position: absolute;
    top: 297px;
    padding: 0;
    border: 0;
    width: 1156px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 85px;
            font-size: 2em;
            background-color: transparent;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }
  `;

  // Esplorando a tag dialog, comfira a documentação no mozilla.
  return (
    <>
      {/*
        open é o estado que controla se o modal aparece ou não caso true (aparece), false (some.
        
        !!foto: os dois pontos de exclamação é um recurso do javaScript onde transformamos um objeto em boleano, se ele for true, com o primeiro ! ele fica falso e no segundo volta a true, caso false ele vira true depois false. Ou seja ele checa se aquele objeto é um valor valido ou não.

        em resumo, se existir alguma foto selecionada o open recebe true e o dialog abre.
      */}

      {
      // Este componente se a variavel fotoSelecionada tiver alguma foto.
      foto && 
        <>
          <Overlay />
          <DialogStyles open={!!foto} onClose={aoFechar}>
            <Imagens expandida={true} foto={foto} aoAlternarFavorito={aoAlternarFavorito} />
            <form method="dialog">
              <button type="submit"><IoClose /></button>
            </form>
          </DialogStyles>
        </>
      }
    </>
  );
};

export default ModalZoom;
