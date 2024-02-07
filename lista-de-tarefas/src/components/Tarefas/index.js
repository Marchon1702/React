import React from 'react'

//Para tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import PropTypes from 'prop-types'

import './Tarefas.css'

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => {
        return <li key={tarefa}>   {tarefa}
                  <div>
                    <FaEdit className='edit' onClick={(e) => handleEdit(e, index)}/>

                    <FaWindowClose className='delete' onClick={(e) => handleDelete(e, index)}/>

                  </div>
                </li>
          })}
    </ul>
  )
}

// Acionando o proptypes
Tarefas.propTypes = {
  // nome.ProTypes.oq é.requerido ou não
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  // Quando quiser um campo que n é requerido temos q colocar um valor padrão.
  tarefas: PropTypes.array.isRequired
}
