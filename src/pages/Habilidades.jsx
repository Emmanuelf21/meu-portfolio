import { FiExternalLink, FiUsers, FiMessageCircle, FiBookOpen, FiTarget, FiLayers, FiAward } from 'react-icons/fi';

import BadgeGoogle from '../assets/images/certificados/badge_google.png';
import BadgeCisco from '../assets/images/certificados/badge-iot-cisco.png';
import SecureCloud from '../assets/images/certificados/build-a-secure-cloud-network.png';
import EnglishIt from '../assets/images/certificados/english-for-it-1.png';
import LoadBalancing from '../assets/images/certificados/implement-load-balancing.png';
import ItEssentials from '../assets/images/certificados/itessentials.png';
import JSEssentials1 from '../assets/images/certificados/javascript-essentials-1.png';
import PrepareData from '../assets/images/certificados/prepare-data.png';
import SetUpAppDev from '../assets/images/certificados/set-up-an-app-dev.png';

import html from '../assets/images/icons/html-icon.png';
import css from '../assets/images/icons/css-icon.png';
import js from '../assets/images/icons/js-icon.png';
import react from '../assets/images/icons/react-icon.png';
import java from '../assets/images/icons/java-icon.png';
import python from '../assets/images/icons/python-icon.png';
import node from '../assets/images/icons/node.png';
import figma from '../assets/images/icons/figma-icon.png';
import git from '../assets/images/icons/git-icon.png';

import './habilidades.css';

const tecnologias = [
  { nome: 'HTML', imagem: html },
  { nome: 'CSS', imagem: css },
  { nome: 'JavaScript', imagem: js },
  { nome: 'React', imagem: react },
  { nome: 'Java', imagem: java },
  { nome: 'Python', imagem: python },
  { nome: 'Node.js', imagem: node },
  { nome: 'Git', imagem: git },
  { nome: 'Figma', imagem: figma },
];

const habilidadesComportamentais = [
  {
    icone: <FiMessageCircle />,
    titulo: 'Comunicação e didática',
    descricao:
      'Experiência como professor de programação e robótica, explicando conceitos técnicos de forma clara e adaptando a abordagem ao nível de conhecimento de cada aluno.',
    tags: ['Comunicação clara', 'Didática', 'Escuta ativa'],
  },
  {
    icone: <FiUsers />,
    titulo: 'Trabalho em equipe',
    descricao:
      'Colaboração em projetos de desenvolvimento, com experiência como Scrum Master no projeto Clínica Pé de Pano.',
    tags: ['Colaboração', 'Scrum', 'Feedback'],
  },
  {
    icone: <FiBookOpen />,
    titulo: 'Planejamento e organização',
    descricao:
      'Planejamento de aulas e atividades práticas, organização de tarefas e acompanhamento da evolução dos alunos.',
    tags: ['Planejamento', 'Organização', 'Trello e Notion'],
  },
  {
    icone: <FiTarget />,
    titulo: 'Resolução de problemas',
    descricao:
      'Desenvolvimento de soluções por meio da programação, investigação de erros e orientação de alunos durante desafios práticos.',
    tags: ['Lógica', 'Depuração', 'Autonomia'],
  },
  {
    icone: <FiLayers />,
    titulo: 'Prototipação e colaboração',
    descricao:
      'Utilização do Figma para criar protótipos de interfaces e colaborar com a equipe durante o desenvolvimento de projetos.',
    tags: ['Figma', 'UI/UX', 'Prototipação'],
  },
];

const certificados = [
  { nome: 'Google Cloud', imagem: BadgeGoogle },
  { nome: 'Cisco IoT', imagem: BadgeCisco },
  { nome: 'Build a Secure Cloud Network', imagem: SecureCloud },
  { nome: 'English for IT 1', imagem: EnglishIt },
  { nome: 'Implement Load Balancing', imagem: LoadBalancing },
  { nome: 'IT Essentials', imagem: ItEssentials },
  { nome: 'JavaScript Essentials 1', imagem: JSEssentials1 },
  { nome: 'Prepare Data', imagem: PrepareData },
  { nome: 'Set Up an App Development Environment', imagem: SetUpAppDev },
];

const Habilidades = () => {
  return (
    <main className="container-habilidades">
      <section className="secao-habilidades">
        <div className="cabecalho-habilidades">
          <span className="sobretitulo-habilidades">CONHECIMENTOS E COMPETÊNCIAS</span>
          <h2>Habilidades</h2>
          <p>
            Combino conhecimentos em desenvolvimento de software com experiência
            em ensino, comunicação e colaboração para transformar ideias em soluções.
          </p>
        </div>

        <div className="bloco-habilidades">
          <div className="titulo-secao-habilidades">
            <h3>Habilidades técnicas</h3>
            <p>Tecnologias e ferramentas com as quais já tive contato em estudos, aulas e projetos.</p>
          </div>

          <div className="grade-tecnologias">
            {tecnologias.map((tecnologia) => (
              <article className="tecnologia-item" key={tecnologia.nome}>
                <img src={tecnologia.imagem} alt="" loading="lazy" />
                <span>{tecnologia.nome}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="bloco-habilidades">
          <div className="titulo-secao-habilidades">
            <h3>Competências</h3>
            <p>
              Competências desenvolvidas tanto na sala de aula quanto no trabalho
              em equipe durante projetos de tecnologia.
            </p>
          </div>

          <div className="grade-competencias">
            {habilidadesComportamentais.map((habilidade) => (
              <article className="competencia-card" key={habilidade.titulo}>
                <div className="competencia-icone">{habilidade.icone}</div>
                <h4>{habilidade.titulo}</h4>
                <p>{habilidade.descricao}</p>
                <div className="competencia-tags">
                  {habilidade.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao-certificados">
        <div className="cabecalho-habilidades">
          <span className="sobretitulo-habilidades">FORMAÇÃO CONTÍNUA</span>
          <h2>Certificados e badges</h2>
          <p>
            Certificações e cursos complementares nas áreas de tecnologia,
            computação em nuvem, programação e inglês para TI.
          </p>
        </div>

        <div className="grade-certificados">
          {certificados.map((certificado) => (
            <a
              className="certificado-card"
              href="https://www.credly.com/users/emmanuel-franco.84f6f802"
              target="_blank"
              rel="noopener noreferrer"
              key={certificado.nome}
              aria-label={`Abrir imagem do certificado: ${certificado.nome}`}
            >
              <div className="certificado-imagem">
                <img
                  src={certificado.imagem}
                  alt={certificado.nome}
                  loading="lazy"
                />
              </div>
              <div className="certificado-info">
                <span>{certificado.nome}</span>
                <FiExternalLink aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        <a
          className="botao-certificados"
          href="https://www.credly.com/users/emmanuel-franco.84f6f802"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiAward aria-hidden="true" />
          Visualizar certificados e badges na Credly
          <FiExternalLink aria-hidden="true" />
        </a>
      </section>
    </main>
  );
};

export default Habilidades;