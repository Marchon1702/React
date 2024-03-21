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

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo> Navegue pela galeria</Titulo>
          {fotos.map((foto) => (
            <Imagens
              foto={foto}
              aoZoomAplicado={aoFotoSelecionada}
              aoAlternarFavorito={aoAlternarFavorito} 
              key={ foto.id } 
            />
          ))}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
