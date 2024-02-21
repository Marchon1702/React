import './ShowForm.css'

const ShowForm = (props) => {
    // com props eu usarei o metodo map com uma variavel de outro componente q neste caso é o formulario.
    return (
        props.thinks.map( think => <li key={think}>{think}</li>)
    )
} 

export default ShowForm