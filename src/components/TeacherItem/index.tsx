import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './style.css'

export interface Teacher {
  id: string;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({teacher}) => {
  function creatNewConnection(){
    api.post('/connections',{
      user_id: teacher.id,
    })
  }

  return (

  <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong> {teacher.name}</strong>
          <span>{teacher.subject}s</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora.
          <strong>R$ {teacher.cost}</strong>
        </p>
        
      <a  
      target="_blanck"
      onClick={creatNewConnection} 
      href={`https://wa.me/${teacher.whatsapp}`}
      >
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </a>
      </footer>
    </article>
  )
}

export default TeacherItem;