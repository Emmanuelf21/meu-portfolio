import React from 'react'
import { Link } from 'react-router-dom'

import Hand from "../assets/images/icons/agreement.png";
import Paper from "../assets/images/icons/essay.png";
import Pencil from "../assets/images/icons/pencil.png";

import BadgeGoogle from "../assets/images/certificados/badge_google.png"
import BadgeCisco from "../assets/images/certificados/badge-iot-cisco.png"
import SecureCloud from "../assets/images/certificados/build-a-secure-cloud-network.png"
import EnglishIt from "../assets/images/certificados/english-for-it-1.png"
import LoadBalancing from "../assets/images/certificados/implement-load-balancing.png"
import ItEssentials from "../assets/images/certificados/itessentials.png"
import JSEssentials1 from "../assets/images/certificados/javascript-essentials-1.png"
import PrepareData from "../assets/images/certificados/prepare-data.png"
import SetUpAppDev from "../assets/images/certificados/set-up-an-app-dev.png"


import './habilidades.css';


const Habilidades = () => {
  return (
    <div className="container-habilidades">
      <section className='habilidades'>
        <h2>Habilidades</h2>
        <article className='cards-habilidades'>
          <article className='card-habilidade'>
            <img src={Hand} alt="#" />
            <p>Trabalho em equipe utilizando o método Scrum. Fui Scrum Master da minha equipe durante o curso para o desenvolvimento do projeto 'Clínica Pé de Pano'.</p>
          </article>
          <article className='card-habilidade'>
            <img src={Paper} alt="#" />
            <p>Planejamento, organização e comunicação com a equipe utilizando as ferramentas Trello e Notion.</p>
          </article>
          <article className='card-habilidade'>
            <img src={Pencil} alt="#" />
            <p>Conhecimento em Figma para desenvolvimento de protótipos de alta fidelidade, trabalhando com a equipe em tempo real.</p>
          </article>
        </article>
      </section>
      <section className='certificados'>
        <h2>Certificados</h2>
        <article className="certificados-flex">
          <div className="list">
            <div className="item" style={{"--position": 1}}>
              <img src={BadgeGoogle} alt="#" />
            </div>
            <div className="item" style={{"--position": 2}}>
              <img src={BadgeCisco} alt="#" />
            </div>
            <div className="item" style={{"--position": 3}}>
              <img src={SecureCloud} alt="#" />
            </div>
            <div className="item" style={{"--position": 4}}>
              <img src={EnglishIt} alt="#" />
            </div>
            <div className="item" style={{"--position": 5}}>
              <img src={LoadBalancing} alt="#" />
            </div>
            <div className="item" style={{"--position": 6}}>
              <img src={ItEssentials} alt="#" />
            </div>
            <div className="item" style={{"--position": 7}}>
              <img src={JSEssentials1} alt="#" />
            </div>
            <div className="item" style={{"--position": 8}} >
              <img src={PrepareData} alt="#" />
            </div>
            <div className="item" style={{"--position": 9}}>
              <img src={SetUpAppDev} alt="#" />
            </div>
          </div>
        </article>
        <Link to="https://www.credly.com/users/emmanuel-franco.84f6f802" target='_blank'>Visualizar certificados e badges</Link>
      </section>
    </div>
  )
}

export default Habilidades