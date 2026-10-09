
import Card from '../components/Card';

import imagemMovieLibrary from '../assets/images/movieslib.png';
import imagemAbsoluteCinema from '../assets/images/cinema.png';
import imagemKaraoke from '../assets/images/karaoke.png';
import imagemDashboard from '../assets/images/dashboards.png';

import './projetos.css';

const titulo1 = 'Movie Library';
const texto1 = 'Filmes melhor avaliados';
const habilidades1 = 'HTML - CSS - JS - React - TMDB API';
const projeto1 = 'https://emmanuelf21.github.io/movies_lib/';
const imagem1 = imagemMovieLibrary;

const titulo2 = 'Absolute Cinema';
const texto2 = 'Compra de ingressos online';
const habilidades2 = 'React - Supabase - TMDB API - Vercel';
const projeto2 = 'https://cinema-supabase.vercel.app';
const imagem2 = imagemAbsoluteCinema;

const titulo3 = 'Reserva Karaokê';
const texto3 = 'Faça reservas de salas de Karaokê';
const habilidades3 = 'React.JS - Tailwind - Supabase';
const projeto3 = 'https://karaoke-novo.vercel.app';
const imagem3 = imagemKaraoke;

const titulo4 = 'Dashboard';
const texto4 = 'Dashboard com visualização de dados';
const habilidades4 = 'TypeScript - React - Next.js - Tailwind';
const projeto4 = 'https://dashboard-next-chi-virid.vercel.app';
const imagem4 = imagemDashboard;

const Projetos = () => {
  return (
    <main className="container-projetos">
      <h2>Meus Projetos!
      <div className='projetos-linha'></div>

      </h2>
      <section className="cards">
        <Card
          id="1"
          titulo={titulo1}
          texto={texto1}
          habilidades={habilidades1}
          projeto={projeto1}
          imagem={imagem1}
          status={true}
        />

        <Card
          id="2"
          titulo={titulo2}
          texto={texto2}
          habilidades={habilidades2}
          projeto={projeto2}
          imagem={imagem2}
          status={false}
        />

        <Card
          id="3"
          titulo={titulo3}
          texto={texto3}
          habilidades={habilidades3}
          projeto={projeto3}
          imagem={imagem3}
          status={false}
        />

        <Card
          id="4"
          titulo={titulo4}
          texto={texto4}
          habilidades={habilidades4}
          projeto={projeto4}
          imagem={imagem4}
          status={false}
        />
      </section>
    </main>
  );
};

export default Projetos;
