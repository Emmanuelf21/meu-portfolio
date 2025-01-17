import React from 'react'
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({ id, titulo, texto, habilidades, projeto, status }) => {
    if (status) {
        return (
            <>
                <input className='input-projetos' type="radio" name="slide" id={id} defaultChecked />
                <label htmlFor={id} className='card'>
                    <div className="row">
                        <div className="row-text">
                            <div className="icon">{id}</div>
                            <div className="description">
                                <h4>{titulo}</h4>
                                <p>{texto}</p>
                                <p>{habilidades}</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to={projeto} target='_blank'>Ver projeto</Link>
                        </div>
                    </div>
                </label>
            </>
        )

    } else {
        return (
            <>
                <input className='input-projetos' type="radio" name="slide" id={id} />
                <label htmlFor={id} className='card'>
                    <div className="row">
                    <div className="row-text">
                            <div className="icon">{id}</div>
                            <div className="description">
                                <h4>{titulo}</h4>
                                <p>{texto}</p>
                                <p>{habilidades}</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to={projeto} target='_blank'>Ver projeto</Link>
                        </div>
                    </div>
                </label>
            </>
        )
    }

}

export default Card