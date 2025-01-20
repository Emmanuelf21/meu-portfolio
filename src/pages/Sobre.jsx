import React from 'react';
import { FaJava, FaPython, FaReact, FaJs } from 'react-icons/fa';


import './sobre.css';

const Sobre = () => {
  return (
    <div className="container-sobre">
      <section className="lateral">
        {/* <div className='imagem-codigo'></div> */}
        <div className='icones'>
          <FaJava />
          <FaPython color='rgb(0, 255, 213)' />
        </div>
      </section>
      <section className="sobre-info">
        <h2>Sobre mim!</h2>
        <span className='texto'>
          <p>
            Sou apaixonado por tecnologia e desenvolvimento de software. Iniciei minha jornada acadêmica em Ciências da Computação pela Unicsul e, atualmente, estou cursando Técnico em Desenvolvimento de Sistemas no Senai, ampliando ainda mais meu conhecimento na área.
          </p>
          <p>
            Durante minha trajetória, trabalhei em projetos utilizando diversas tecnologias, como Java, Python, JavaScript, React e jQuery, desenvolvendo soluções robustas e eficientes. Embora meu foco atual seja no front-end, onde exploro ao máximo minhas habilidades em criar interfaces interativas e amigáveis, também estou comprometido em expandir meu domínio no back-end.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para aprender, inovar e contribuir com projetos que impactem positivamente a experiência dos usuários.
          </p>
        </span>
      </section>
      <section className='lateral'>
        <div className='icones'>
          <FaReact color='rgb(0, 255, 213)' />
          <FaJs />
        </div>
        {/* <div className='imagem-codigo'></div> */}
      </section>
    </div>
  )
}

export default Sobre