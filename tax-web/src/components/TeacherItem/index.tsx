
import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Teacher{
    id: number;
    name: string;
    email: string;
    whatsapp:number;
}

interface TeacherItemProps{
    teacher:Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher}) =>{

    return(
        <article className="teacher-item">
            <header>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.email}</span>
                </div>
            </header>
        
            <footer>
                <p>
                   Entre em contato
                </p>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato. 
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;