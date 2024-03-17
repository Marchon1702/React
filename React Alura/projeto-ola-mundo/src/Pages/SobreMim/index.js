import PostModelo from "components/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobremim from 'assets/sobre_mim_foto.png'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="SobreMim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Ântonio!
            </h3>

            <img
                src={fotoSobremim}
                alt="Antonio sorrindo"
            />

            <p className={styles.paragrafo}>
                Conheça Antonio, um talentoso programador front-end com uma paixão genuína pelo mundo do desenvolvimento web. Com anos de experiência em sua área, Antonio traz consigo um conjunto impressionante de habilidades e um entusiasmo contagiante por criar experiências digitais incríveis.

                Desde tenra idade, Antonio sempre foi fascinado pelo potencial da tecnologia. Seus primeiros passos foram dados em projetos de escola, onde ele mergulhou no universo da programação e descobriu sua paixão pela criação de interfaces interativas e responsivas. Essas primeiras experiências plantaram a semente para uma carreira promissora no desenvolvimento web.

                Ao longo dos anos, Antonio aprimorou suas habilidades através de uma combinação de educação formal e aprendizado autodidata. Ele completou sua formação em Ciência da Computação, absorvendo conhecimentos sólidos em linguagens como HTML, CSS e JavaScript. Além disso, ele sempre busca estar atualizado com as últimas tendências e tecnologias do setor, garantindo que seu trabalho esteja sempre na vanguarda da inovação.

                No mundo profissional, Antonio acumulou uma ampla gama de experiências trabalhando em diversos projetos desafiadores. Ele teve a oportunidade de colaborar com equipes multidisciplinares e clientes exigentes, desenvolvendo desde sites corporativos elegantes até aplicativos web complexos. Sua capacidade de traduzir requisitos de design em código funcional e esteticamente agradável é incomparável.

                Além de sua dedicação ao trabalho, Antonio também tem uma vida fora da programação. Nos momentos de folga, você pode encontrá-lo explorando a natureza, praticando esportes ao ar livre ou mergulhando em um bom livro. Ele acredita na importância de manter um equilíbrio saudável entre trabalho e lazer para alimentar sua criatividade e inspiração.

                Com sua habilidade técnica, paixão pelo desenvolvimento web e uma abordagem holística da vida, Antonio continua a deixar sua marca no mundo digital, criando experiências memoráveis que cativam e inspiram. Ele é mais do que apenas um programador front-end - é um visionário que transforma ideias em realidade.
            </p>
        </PostModelo>
    )
}

export default SobreMim