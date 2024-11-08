import React, { useEffect, useState } from 'react'
import './Card.css'
import Lixeira from '../../assets/lixeira.png'
import api from '../../service/api'


function Card () {

  const [users, setUsers] = useState([])

  async function getUsers () {
    const usersApi = await api.get('/usuarios')
    setUsers(usersApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  async function deleteUsers (id) { 
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  return (
    <div className='box-card'>
      {users.map((user) => (
        <div className='card' key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Idade: {user.age}</p>
          </div>
          <div>
            <button id='buttonLixeira' onClick={() => deleteUsers(user.id)}>
              <img src={Lixeira} alt="lixeira" id='lixeira' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card