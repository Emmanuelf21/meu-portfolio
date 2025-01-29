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

import html from "../assets/images/icons/html-icon.png"
import css from "../assets/images/icons/css-icon.png"
import js from "../assets/images/icons/js-icon.png"
import react from "../assets/images/icons/react-icon.png"
import java from "../assets/images/icons/java-icon.png"
import python from "../assets/images/icons/python-icon.png"
import node from "../assets/images/icons/node.png"
import figma from "../assets/images/icons/figma-icon.png"
import git from "../assets/images/icons/git-icon.png"

import './habilidades.css';


const Habilidades = () => {
  return (
    <div className="container-habilidades">
      <section className='habilidades'>
        <h2>Habilidades</h2>
        <article className="slider" style={{
          "--width": "50px", 
          "--height": "50px",
          "--width2": "35px",
          "--height2": "35px",
          "--quantidade": 9}}>
          <div className="list">
            <div className="item" style={{"--position": 1}}>
              <img src={html} alt="#" />
            </div>
            <div className="item" style={{"--position": 2}}>
              <img src={css} alt="#" />
            </div>
            <div className="item" style={{"--position": 3}}>
              <img src={js} alt="#" />
            </div>
            <div className="item" style={{"--position": 4}}>
              <img src={react} alt="#" />
            </div>
            <div className="item" style={{"--position": 5}}>
              <img src={java} alt="#" />
            </div>
            <div className="item" style={{"--position": 6}}>
              <img src={python} alt="#" />
            </div>
            <div className="item" style={{"--position": 7}}>
              <img src={git} alt="#" />
            </div>
            <div className="item" style={{"--position": 8}}>
              <img src={node} alt="#" />
            </div>
            <div className="item" style={{"--position": 9}}>
              <img src={figma} alt="#" />
            </div>
          </div>
        </article>
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
        <article className="slider" style={{
          "--width": "150px",
          "--height": "150px",
          "--width2": "90px",
          "--height2": "90px",
          "--quantidade": 9
          }}>
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