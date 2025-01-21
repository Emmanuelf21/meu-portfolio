import React from 'react'
import './contato.css'
import { useNavigate } from "react-router-dom";

const email = import.meta.env.VITE_EMAIL;


const Contato = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("E-mail enviado, aguarde o retorno!");
    navigate("/");
  }
  
  return (
    <section className='container-contato'>
      <div className="formulario">
        <form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>
          <div className="um-input">
            <input type="text" name="name" id="nome" className="inputs" required autoComplete="off" />
            <label htmlFor="name">Nome:</label>
          </div>
          <div className="um-input">
            <input type="text" name="email" id="email" className="inputs" required autoComplete="off" />
            <label htmlFor="email">E-mail de contato:</label>
          </div>
          <div className="um-input">
            <input type="text" name="subject" id="razao" className="inputs" required autoComplete="off" />
            <label htmlFor="subject">Motivo do contato:</label>
          </div>
          <div className="textarea">
            <textarea name="message" id="mensagem" required autoComplete="off"></textarea>
            <label htmlFor="message">Sua mensagem:</label>
          </div>

          <input type="hidden" name="accessKey" value={email} />
          <input type="hidden" name="redirectTo" value="https://emmanuel-franco.vercel.app" />
          <div className="btn-enviar">
            <button type="submit">
              <div className="blob1"></div>
              <div className="blob2"></div>
              <div className="inner">Enviar</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contato