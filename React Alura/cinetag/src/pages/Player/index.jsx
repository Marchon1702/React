import styles from './Player.module.css';
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import videos from "../../mocks/db.json";
import NotFound from '../NotFound';

const Player = () => {
  const parametro = useParams();
  const video = videos.find((video) => video.id === Number(parametro.id));

  if(!video) return (<NotFound/>)

  return (
    <>
      <Banner imagem={"player"} />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.videoSection}>
          <iframe
            width="860"
            height="560"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
      </section>
    </>
  );
};

export default Player;
