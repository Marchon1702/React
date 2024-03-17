import React from "react";
import Titulo from "../Titulo";
import Tags from "./Tags";
import styled from "styled-components";
import Populares from "./Populares";
import Imagens from "./Imagens";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo> Navegue pela galeria</Titulo>
          {fotos.map((foto) => (
            <Imagens 
              key={ foto.id } 
              endereco={foto.path} 
              descricao={foto.titulo} 
              fonte={ foto.fonte }
            />
          ))}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
