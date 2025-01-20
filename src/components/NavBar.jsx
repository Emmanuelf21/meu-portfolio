import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const links = [document.querySelector(".h2-home"), document.querySelector(".h2-sobre"), document.querySelector(".h2-projetos"), document.querySelector(".h2-contato"), document.querySelector(".h2-habilidades")];

  useEffect(() => {
    switch (query) {
      case '1':
        links.forEach((link) => { link.style = 'color: #000' });
        links[0].style = 'color: #0022FF';
        break;
      case '2':
        links.forEach((link) => { link.style = 'color: #000' });
        links[1].style = 'color: #0022FF';
        break;
      case '3':
        links.forEach((link) => { link.style = 'color: #000' });
        links[2].style = 'color: #0022FF';
        break;
      case '4':
        links.forEach((link) => { link.style = 'color: #000' });
        links[3].style = 'color: #0022FF';
        break;
      case '5':
        links.forEach((link) => { link.style = 'color: #000' });
        links[4].style = 'color: #0022FF';
        break;
    }
  }, [query])

  return (
    <nav id="navBar">
      <menu className="menuBar">
        <Link to="/?q=1" className='h2-home'>Home</Link>
        <Link to="sobre?q=2" className='h2-sobre'>Sobre</Link>
        <Link to="projetos?q=3" className='h2-projetos'>Projetos</Link>
        <Link to="contato?q=4" className='h2-contato'>Contato</Link>
        <Link to="habilidades?q=5" className='h2-habilidades'>Habilidades</Link>
      </menu>

      <p className="text">Bem-vindo ao meu Portfólio!</p>
    </nav>
  )
}

export default NavBar