import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = ({ onSearch }) => {
  
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <header className="header-container">
      
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>

      
      <div className="home-link ccc">
        <Link to="/">ANASAYFA</Link>
      </div>

      
      <div className="episodes-link ccc">
        <Link to="/episodes">BÖLÜMLER</Link>
      </div>

      
      <div className="characters-link ccc">
        <Link to="/characters">KARAKTERLER</Link>
      </div>

      

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Ara..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='btn-enter' onClick={handleSearch}>Ara</button>
      </div>
    </header>
  );
};

export default Header;