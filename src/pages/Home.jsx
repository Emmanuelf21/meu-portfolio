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
          <span><p>Eu sou o</p> <p className='texto-azul text2'>Emmanuel Franco!</p></span>
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
        <Link to="https://drive.google.com/file/d/1Xgerg_I7bogDbOH7YrQa2IQa1-XUotj-/view?usp=sharing" className='botao' target='_Blank'>
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