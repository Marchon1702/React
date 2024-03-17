import React, { useState } from "react";
import styled from "styled-components";
// importando estilos Globais.
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";

// importando JSON de fotos.
import fotos from './fotos.json'

const FundoGradiente = styled.div`
  background-image: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

// Criando container global da aplicação, sua criação tem como objetivo limitar uma largura maxima para a aplicação evitando que a tela fique muito esticada quando em tamanhos maiores.
const AppContainer = styled.div`
  // definindo largura total da tela.
  width: 1240px;
  // centralizando a div
  margin: 0 auto;
  // Reforçando que a largura total da aplicação é 1440px informando que o maximo que a div pode chegar é 100% da tela a fim de evitar quebra de componentes.
  max-width: 100%;
`;

// Criando mainContainer e alinhando a barra lateral e o banner lado a lado.

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  // flex-grow serve para que o componente preencha todo o espaço que sobrou para ele.
  flex-grow: 1;
`;

function App() {

  const [galeryFotos, setGaleryFotos ] = useState(fotos)

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage={"/imagens/banner.png"}
              texto={"A galeria mais completa de fotos do espaço!"}
            />
            <Galeria 
              fotos={ galeryFotos }
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
