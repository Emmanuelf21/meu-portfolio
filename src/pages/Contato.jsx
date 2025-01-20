import React from 'react'
import './contato.css'
const email = import.meta.env.VITE_EMAIL;
const Contato = () => {
  return (
    <section className='container-contato'>
      <div className="formulario">
        <form action="https://api.staticforms.xyz/submit" method="post">
          <div className="um-input">
            <input type="text" name="name" id="nome" className="inputs" required autocomplete="off" />
            <label for="name">Nome:</label>
          </div>
          <div className="um-input">
            <input type="text" name="email" id="email" className="inputs" required autocomplete="off" />
            <label for="email">E-mail:</label>
          </div>
          <div className="um-input">
            <input type="text" name="subject" id="razao" className="inputs" required autocomplete="off" />
            <label for="subject">Motivo do contato:</label>
          </div>
          <div className="textarea">
            <textarea name="message" id="mensagem" required autocomplete="off"></textarea>
            <label for="message">Sua mensagem:</label>
          </div>

          <input type="hidden" name="accessKey" value={email} />
          <input type="hidden" name="redirectTo" value="http://localhost:5173/meu-portfolio" />
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