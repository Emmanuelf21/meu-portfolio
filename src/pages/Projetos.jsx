import React from 'react'
import Card from '../components/Card'

import './projetos.css';

const titulo1 = 'Movie Library';
const texto1 = 'Filmes melhor avaliados';
const habilidades1 = 'HTML - CSS - JS - React - tmdb API';
const projeto1 = 'https://emmanuelf21.github.io/movies_lib/';

const titulo2 = 'Loja de Consoles';
const texto2 = 'Site para venda de consoles';
const habilidades2 = 'HTML - CSS';
const projeto2 = 'https://emmanuelf21.github.io/site-consoles/';

const titulo3 = "Imobiliária Fachada";
const texto3 = 'Site para compra e venda de imóveis';
const habilidades3 = 'HTML - CSS';
const projeto3 = 'https://emmanuelf21.github.io/flexbox-css/';

const titulo4 = "Five Night's at Freddys";
const texto4 = 'Lista dos jogos de FNAF';
const habilidades4 = 'HTML - CSS';
const projeto4 = 'https://emmanuelf21.github.io/fnaf/';

const Projetos = () => {
  return (
    <div className='container-projetos'>
      <h2>Meus Projetos!</h2>
      <span className="cards">
        <Card id='1' texto={texto1} titulo={titulo1} habilidades={habilidades1} projeto={projeto1} status={true}/>
        <Card id='2' texto={texto2} titulo={titulo2} habilidades={habilidades2} projeto={projeto2} status={false}/>
        <Card id='3' texto={texto3} titulo={titulo3} habilidades={habilidades3} projeto={projeto3} status={false}/>
        <Card id='4' texto={texto4} titulo={titulo4} habilidades={habilidades4} projeto={projeto4} status={false}/>
      </span>
    </div>
  )
}

export default Projetos