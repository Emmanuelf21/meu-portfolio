import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom';

import './footer.css';

const footer = () => {
  return (
    <footer>
      
        <p className='email'>
          <AiOutlineMail /> <p>emmanuelfranco2001@gmail.com</p>
        </p>
      
      <div className='social-media'>
        <Link to="https://github.com/Emmanuelf21" target='_Blank'><FaGithub/></Link>
        <Link to="https://www.linkedin.com/in/emmanuel-franco-dev" target='_Blank'><FaLinkedin/></Link>
      </div>
    </footer>
  )
}

export default footer