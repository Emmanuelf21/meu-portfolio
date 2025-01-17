import React from 'react'
import './contato.css'
const email = import.meta.env.VITE_EMAIL;
const Contato = () => {
  return (
    <section className='container-contato'>
      <div class="formulario">
        <form action="https://api.staticforms.xyz/submit" method="post">
          <div class="um-input">
            <input type="text" name="name" id="nome" class="inputs" required autocomplete="off" />
            <label for="name">Nome:</label>
          </div>
          <div class="um-input">
            <input type="text" name="email" id="email" class="inputs" required autocomplete="off" />
            <label for="email">E-mail:</label>
          </div>
          <div class="um-input">
            <input type="text" name="subject" id="razao" class="inputs" required autocomplete="off" />
            <label for="subject">Motivo do contato:</label>
          </div>
          <div class="textarea">
            <textarea name="message" id="mensagem" required autocomplete="off"></textarea>
            <label for="message">Sua mensagem:</label>
          </div>

          <input type="hidden" name="accessKey" value={email} />
          <input type="hidden" name="redirectTo" value="http://localhost:5173/meu-portfolio" />
          <div class="btn-enviar">
            <button type="submit">
              <div class="blob1"></div>
              <div class="blob2"></div>
              <div class="inner">Enviar</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contato