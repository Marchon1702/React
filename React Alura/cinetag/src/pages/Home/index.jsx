import styles from "./Home.module.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import videos from "../../mocks/db.json";

const Home = () => {
  return (
    <>
      <Banner imagem={"home"} />
      <Titulo>
        <h1>Um lugar para guardar seus filmes</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map(video => <Card {...video} key={video.id}/>)}      
      </section>
    </>
  );
};

export default Home;
