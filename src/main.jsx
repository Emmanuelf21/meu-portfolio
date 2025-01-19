import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Projetos from './pages/Projetos.jsx';
import Projeto from './pages/Projeto.jsx';
import Contato from './pages/Contato.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route element={<App/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/meu-portfolio' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
          <Route path='/projetos/:id' element={<Projeto/>}/>
          <Route path='/contato' element={<Contato/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
