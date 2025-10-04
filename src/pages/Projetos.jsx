import React from 'react'
import Card from '../components/Card'

import './projetos.css';

const titulo1 = 'Movie Library';
const texto1 = 'Filmes melhor avaliados';
const habilidades1 = 'HTML - CSS - JS - React - tmdb API';
const projeto1 = 'https://emmanuelf21.github.io/movies_lib/';

const titulo2 = 'Absolute Cinema';
const texto2 = 'Compra de ingressos online';
const habilidades2 = 'React - Supabase - tmdb API - Vercel';
const projeto2 = 'https://cinema-supabase.vercel.app';

const titulo3 = "Reserva Karaokê";
const texto3 = 'Faça reservas de salas de Karaokê';
const habilidades3 = 'React.JS - Tailwind - supabase';
const projeto3 = 'https://karaoke-novo.vercel.app';

const titulo4 = "Dashboard";
const texto4 = 'Dashboard com visualização de dados';
const habilidades4 = 'TypeScript - React - Next - Tailwind';
const projeto4 = 'https://dashboard-next-chi-virid.vercel.app';

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