import './Criar.css'
import React from 'react'

const Criar = () => {
  return (
      <form className='criar'>
        <h2 id='title'>Criador de Usuarios</h2>
        <input type="text" placeholder='Nome' name="name" id="name" />
        <input type="text" placeholder='seuemail@exemplo.com' name="email" id="email" />
        <input type="text" placeholder='Idade' name="age" id="age" />
        <button>Criar</button>
      </form>
  )
}

export default Criar