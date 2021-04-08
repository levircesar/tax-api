import React, { FormEvent, useState ,useEffect } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import api from '../../services/api';

import './styles.css';

function TeacherList(){

    const [teachers, setTeachers] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('taxusers',{
            params:{
                name,
                email,
                whatsapp,
            }
        });
        console.log(response.data);
        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Procure por um contato na Tax">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Input 
                        name="name" 
                        label="Nome"
                        value={name}
                        onChange={(e)=>{setName( e.target.value) }}
                    />
                    <Input 
                        name="email" 
                        label="Email"
                        value={email}
                        onChange={(e)=>{setEmail( e.target.value) }}
                    />
                    <Input 
                        name="whatsapp" 
                        label="Whatsapp"
                        value={whatsapp}
                        onChange={(e)=>{setWhatsapp( e.target.value) }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form> 
            </PageHeader>
            <main>
                {
                    teachers.map((teacher:Teacher)=>{
                        return <TeacherItem key={teacher.id} teacher={teacher}/>
                    })
                }                
            </main>
        </div>
    )
}

export default TeacherList;