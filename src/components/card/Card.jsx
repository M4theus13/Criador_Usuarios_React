import React from 'react'
import './Card.css'
import Lixeira from '../../assets/lixeira.png'

const Card = () => {

  const user = []
  return (
      <div className='box-card'>
        <div>
          <p>Nome: Matheus</p>
          <p>E-mail: email@gmail.com</p>
          <p>Idade: 20</p>
        </div>
        <div>
          <img src={Lixeira} alt="lixeira-icon" id='lixeira' />
        </div>
      {user.map((user) => {

      })}
    </div>
  )
}

export default Card