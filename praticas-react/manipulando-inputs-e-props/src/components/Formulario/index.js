import './Formulario.css'

import Button from '../Button/index'
import { useState } from 'react'
import ShowForm from '../ShowForm'

const Formulario = () => {

    const [thinks, setThinks] = useState([])
    const [think, setThink] = useState('')

    const aoAlterado = valor => setThink(valor)

    const handleChange = (e) => {
        aoAlterado(e.target.value)
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            setThinks([...thinks, think])
            setThink('')
            const input = document.querySelector('#text')
            input.focus()
        }
        }
            className="formulario">
            <ShowForm
                thinks={thinks}
            />
            <label htmlFor="text">
                {think ? think : 'Oquê você esta pensando?'}
            </label>
            <input onChange={handleChange}
                type="text" value={think} id="text" placeholder="Digite algo aqui..." />
            <Button>
                Enviar
            </Button>
        </form>
    )
}

export default Formulario