import React from 'react'
import Foto from '../assets/images/Emmanuel_Franco_Desenvolvedor_Frontend.jpeg'
import { Link } from 'react-router-dom';

import './home.css'

const Home = () => {
  return (
    <div className="container-home">
      <div className="home-sobre">
        <h2>
          Muito prazer!<br />
          <span><p>Me chamo</p> <p className='texto-azul text2'>Emmanuel Franco!</p></span>
        </h2>
        <p>
          Desenvolvedor Front-end Júnior.
          <br />
          <br />
          Desenvolvo aplicações web modernas, responsivas e focadas em resolver problemas reais, utilizando React, TypeScript e APIs.
          <br />
          <br />
          Confira meus projetos e veja na prática como transformo ideias em aplicações funcionais.
        </p>
        <nav className='nav-home'>
          <Link to="projetos?q=3" className='h2-projetos' >Ver Projetos</Link>
          <Link to="https://drive.google.com/file/d/1nwRQsVKfyid7839_TYKPtbTzM9fR7nPB/view?usp=sharing" className='botao' target='_Blank'>
            Download CV
          </Link>
        </nav>
      </div>
      <div className="container-foto">
        <img src={Foto} alt="" />
      </div>
    </div>
  )
}

export default Home