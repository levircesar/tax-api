import React , {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm(){
    //variavel para redirecionamento
    const history = useHistory();   
    //é necessário fazer isso pro formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    //disparar formulario
    function handleCreateClass(e : FormEvent){
        e.preventDefault();

        api.post('taxusers',{
            name,
            email,
            whatsapp,
        }).then(()=>{
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!');
        });

    }


    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Cadastre-se na Tax"
                description="preencha o formulário abaixo."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Cadastro no Tax</legend>
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
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados. 
                    </p>
                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;