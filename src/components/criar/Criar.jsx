import api from '../../service/api'
import './Criar.css'
import React, { useRef } from 'react'

const Criar = () => {

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  async function createUsers () {
    await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value,
    })
    getUsers()
  }

  return (
      <form className='criar'>
        <h2 id='title'>Criador de Usuarios</h2>
        <input type="text" placeholder='Nome' name="name" id="name" ref={inputName}/>
        <input type="text" placeholder='seuemail@exemplo.com' name="email" id="email" ref={inputEmail}/>
        <input type="text" placeholder='Idade' name="age" id="age" ref={inputAge}/>
        <button onClick={createUsers}>Criar</button>
      </form>
  )
}

export default Criar