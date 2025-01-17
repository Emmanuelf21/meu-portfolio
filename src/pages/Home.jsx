import React from 'react'
import Foto from '../assets/images/Emmanuel_Franco_Desenvolvedor_Frontend.jpeg'
import {Link} from 'react-router-dom';

import './home.css'

const Home = () => {
  return (
    <div className="container-home">
      <div className="home-sobre">
        <h2>
          Muito prazer!<br/>
          <span>Eu sou o <p className='texto-azul'>Emmanuel Franco.</p></span>
        </h2>
        <p>
          Bacharel em Ciências da computação e cursando Técnico em Desenvolvimento de Sistemas.
          <br/>
          <br/>
          Entusiasta de tecnologia e gosto de criar experiências digitais intuitivas.
          <br/>
          <br/>
          Explore meu portfólio para saber mais do meu trabalho!
        </p>
        <Link to="https://drive.google.com/file/d/1XNtX4YCz6OAsG2njUp0Z0pFprbdSM6n9/view?usp=sharing" className='botao' target='_Blank'>
          Download CV
        </Link>
      </div>
      <div className="container-foto">
        <img src={Foto} alt="" />
      </div>
    </div>
  )
}

export default Home