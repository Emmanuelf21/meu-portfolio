import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaExternalLinkAlt,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";

import "./sobre.css";

const Sobre = () => {
  return (
    <main className="container-sobre">
      <section className="sobre-info">
        <header className="sobre-header">
          <span className="sobre-etiqueta">QUEM SOU EU</span>
          <h2>
            Sobre mim<span>!</span>
          </h2>
          <div className="sobre-linha"></div>
        </header>

        <div className="texto">
          <p>
            Sou bacharel em Ciência da Computação pela Unicsul e desenvolvedor
            de software, apaixonado por tecnologia e pela criação de soluções
            que transformam ideias em projetos reais.
          </p>

          <p>
            Atualmente, sou instrutor de programação e robótica na Ctrl+Play.
            Também desenvolvo aplicações web com React, Python, APIs REST e
            bancos de dados. Busco evoluir continuamente e contribuir com
            projetos que unam funcionalidade, tecnologia e boa experiência para
            o usuário.
          </p>
          <p>
            Meu objetivo é consolidar minha carreira como desenvolvedor de
            software, aplicando meus conhecimentos em projetos reais e evoluindo
            continuamente como profissional. Busco uma oportunidade na área de
            desenvolvimento para aprender com equipes experientes, enfrentar
            novos desafios e contribuir com soluções úteis e de qualidade.
          </p>
        </div>
        <section className="sobre-publicacao">
          <div className="publicacao-icone">
            <FaBookOpen />
          </div>

          <div className="publicacao-conteudo">
            <span className="publicacao-etiqueta">
              PRODUÇÃO TÉCNICA / ACADÊMICA
            </span>
            <h3>Artigo publicado</h3>
            <p>
              Confira meu artigo sobre assebilidade digital para terceira idade e conheça um pouco mais sobre meus estudos,
              experiências e contribuições na área de tecnologia.
            </p>

            <a
              href="https://ojs.ifsp.edu.br/sinergia/article/view/2501"
              target="_blank"
              rel="noopener noreferrer"
              className="publicacao-link"
            >
              Ler artigo
              <FaExternalLinkAlt />
            </a>
          </div>
        </section>
        <div className="sobre-destaques">
          <article className="destaque">
            <div className="destaque-icone">
              <FaGraduationCap />
            </div>
            <div className="destaque-conteudo">
              <h3>Formação</h3>
              <p>Ciência da Computação</p>
            </div>
          </article>

          <article className="destaque">
            <div className="destaque-icone">
              <FaChalkboardTeacher />
            </div>
            <div className="destaque-conteudo">
              <h3>Experiência</h3>
              <p>Programação e robótica</p>
            </div>
          </article>

          <article className="destaque">
            <div className="destaque-icone">
              <FaLaptopCode />
            </div>
            <div className="destaque-conteudo">
              <h3>Foco profissional</h3>
              <p>Desenvolvimento de software</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
