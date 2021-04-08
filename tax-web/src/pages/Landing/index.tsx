import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/tax2.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import './styles.css';
function Landing(){

    return ( 
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h2>Aplicacao de seleção na Tax</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="landing" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Procurar por um contato 
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Cadastrar na Tax
                    </Link>
                    

                    
                </div>

            </div>
        </div>

    )
}

export default Landing;