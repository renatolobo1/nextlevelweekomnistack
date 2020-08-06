import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
  return (

  <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo"/>
            <div>
              <strong> Renato Lôbo</strong>
              <span>Programação para crianças</span>
            </div>
          </header>

          <p>
            Entusiasta em aprender novas tecnologias e ensinar , 
            <br></br>
            as crianças que são o nosso futuro.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 40,00</strong>
            </p>
            
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
          </footer>

        </article>
  )
}

export default TeacherItem;