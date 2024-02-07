import React from 'react'
// Importando o propTypes para controlar a importação dos métodos.
import PropTypes from 'prop-types'

//Para o Form
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({handleSubmit, handleChange, novaTarefa}) {
  return (
    <form action='#' className='formulario' onSubmit={handleSubmit}>
      <input
        onChange={handleChange} type='text' value={novaTarefa}
      />
      <button type='submit'>
        <FaPlus/>
      </button>
    </form>
  )
}

// Adicionando valores padrões
//Form.defaultProps = {
//  novaTarefa: 'Valor Padrão'
//}

// Acionando o proptypes
Form.propTypes = {
  // nome.ProTypes.oq é.requerido ou não
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // Quando quiser um campo que n é requerido temos q colocar um valor padrão.
  novaTarefa: PropTypes.string.isRequired
}
