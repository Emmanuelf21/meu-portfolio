
import { FiExternalLink } from 'react-icons/fi';

import './card.css';

const Card = ({
  id,
  titulo,
  texto,
  habilidades,
  projeto,
  imagem,
  status
}) => {
  return (
    <article className={`card `}>
      <div className="card-imagem">
        <img
          src={imagem}
          alt={`Prévia do projeto ${titulo}`}
          loading="lazy"
        />
      </div>

      <div className="row">
        <div className="row-text">
          <span className="icon">
            {String(id).padStart(2, '0')}
          </span>

          <div className="description">
            <h4>{titulo}</h4>
            <p>{texto}</p>
            <p>{habilidades}</p>
          </div>
        </div>

        <div className="botao">
          <a
            href={projeto}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
