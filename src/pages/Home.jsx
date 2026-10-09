
import Foto from '../assets/images/Emmanuel_Franco_Desenvolvedor_Frontend.jpeg';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
  return (
    <main className="container-home">
      <section className="home-sobre">
        <span className="home-etiqueta">QUEM SOU EU</span>

        <h2>
          Muito prazer!
          <span className="home-nome">
            Me chamo <strong className="texto-azul">Emmanuel Franco!</strong>
          </span>
        </h2>

        <div className="home-linha"></div>

        <h3 className="home-cargo">
          Desenvolvedor Front-end Júnior.
        </h3>

        <div className="home-descricao">
          <p>
            Desenvolvo aplicações web modernas, responsivas e focadas
            em resolver problemas reais, utilizando React, TypeScript e APIs.
          </p>

          <p>
            Confira meus projetos e veja na prática como transformo
            ideias em aplicações funcionais.
          </p>
        </div>

        <nav className="nav-home">
          <Link to="projetos?q=3" className="botao-projetos">
            Ver Projetos
          </Link>

          <a
            href="https://drive.google.com/file/d/1nwRQsVKfyid7839_TYKPtbTzM9fR7nPB/view?usp=sharing"
            className="botao-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </nav>
      </section>

      <aside className="container-foto">
        <div className="foto-moldura">
          <img
            src={Foto}
            alt="Emmanuel Franco, desenvolvedor front-end"
          />
        </div>
      </aside>
    </main>
  );
};

export default Home;
