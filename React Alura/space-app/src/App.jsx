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
import ModalZoom from "./components/ModalZoom";

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
  // Reforçando que a largura total da aplicação é 1240px informando que o maximo que a div pode chegar é 100% da tela a fim de evitar quebra de componentes.
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
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  // Alternar em ingles é toogle, palavra bastante utilizada em input de on/off.
  const aoAlternarFavorito = (foto) => {
    // Quando chamamos esta função no modal estamos lidando com a foto selecionada e não coma foto da galeria por isso quando for clicado no favorito pelo modal temos que reSetar a variavel fotoSelecionada.
    // reSetando a foto selecionada para que o icone tbm se altere no modal:
    // Se o id da foto clicada for igual ao id da fotoSelecionada (?. === e não for nulo) essa foto selecionada é reSetada recebendo um favorito de valor contraio ao seu valor atual.
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada(
        {
          ...fotoSelecionada,
          favorito: !fotoSelecionada.favorito
        }
      )
    }
    // retorna um novo array com o map que pra cada objeto se cria um novo adicionando o atributo favorito, se o id da foto da galeria iterada for igual a foto clicada então esse favorito recebe o contrario do que ele é (true ou false), caso a foto da galeria iterada não for a mesma que foi clicada então seu favorito recebe oque ele ja é.
    setGaleryFotos(galeryFotos.map( fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
      }
    }))
  }

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
            {/* Fazendo prop.drilling com aoFotoSelecioanada, essa função recebe um parametro q seta ele em foto selecionada, para pegar essa foto usamos galeira como intermediador e imagens para pegar a foto clicada e setar em FotoSelecionada.*/} 
            <Galeria              
              aoFotoSelecionada={ foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={ galeryFotos }
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada} 
        aoFechar={() => setFotoSelecionada(null)} 
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
}

export default App;
