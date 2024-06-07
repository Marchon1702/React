import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  return (
    <>
      <Banner imagem={"favoritos"} />
      <Titulo>
        <h1>Seu Favoritos</h1>
      </Titulo>
      <Card id="1" titulo="teste" capa="https://www.doglife.com.br/blog/assets/post/gato-filhote-tudo-que-voce-precisa-saber-para-cuidar-bem-61aa5b4f5448461cf9e0a54b/filhote-capa.jpg.jpg?w=1200"/>
    </>
  );
};

export default Favoritos;
