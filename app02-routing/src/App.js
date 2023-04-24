// referencia abel: https://github.com/abelcabezaroman/react-memes

import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import UsersDetailsPage from './Pages/UsersPage/UsersDetailPage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import QuotesPage from './Pages/QuotesPage/QuotesPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import React from "react";
import MemePage from './Pages/MemePage/MemePage';
import { MemeContext } from './Components/Contexts/MemeContext';
import { useState } from 'react';

export const LanguageContext = React.createContext();

function App() {

  const [memeConfig, setMemeConfig] = useState({
    topText: "angular",
    topX: 10,
    topY: 0,
    bottomText: "react",
    bottomX: 10,
    bottomY: 0,
  })

  return (
    <Router>
      <LanguageContext.Provider value="Español">
      <MemeContext.Provider value={{memeConfig, setMemeConfig}}>
        <div>
          <div>
            <header>
              <h1>Second App - ROUTING</h1>
              <nav className='header_nav'>
                <Link className='nav_link' to="/">Home</Link>
                <Link className='nav_link' to="/contact">Contact</Link>
                <Link className='nav_link' to="/users">Users</Link>
                <Link className='nav_link' to="/characters">Characters</Link>
                <Link className='nav_link' to="/quotes">Quotes</Link>
                <Link className='nav_link' to="/settings">Settings</Link>
                <Link className='nav_link' to="/meme">Memes</Link>
              </nav>
            </header>
            <div className='container'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/:id" element={<UsersDetailsPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/quotes" element={<QuotesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/meme" element={<MemePage />} />
              </Routes>
            </div>
          </div>
        </div>

      </MemeContext.Provider>    
      </LanguageContext.Provider>
    </Router>
  )
}

export default App;
