import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/characters.css';

const CharacterList = ({ searchQuery }) => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [confirmDeleteCharacter, setConfirmDeleteCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToFavorites = (character) => {
    if (favorites.length < 10 && !favorites.some((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    } else {
      alert('Maksimum 10 karakter seçebilirsiniz!');
    }
  };

  const handleDeleteCharacter = (characterId) => {
    setConfirmDeleteCharacter(characterId);
  };

  const confirmDelete = (confirmed) => {
    if (confirmed) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== confirmDeleteCharacter);
      setFavorites(updatedFavorites);
      setConfirmDeleteCharacter(null);
    } else {
      setConfirmDeleteCharacter(null);
    }
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Karakterler</h1>
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>
                {character.species} - {character.status}
              </p>
            </Link>
            <button className='fav-btn' onClick={() => addToFavorites(character)}>Favoriye Ekle</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Favori Karakterler</h2>
        <ul>
          {favorites.map((favCharacter) => (
            <li key={favCharacter.id}>
              {favCharacter.name}{' '}
              <button onClick={() => handleDeleteCharacter(favCharacter.id)}>Sil</button>
              {confirmDeleteCharacter === favCharacter.id && (
                <span>
                  {' '}
                  | Emin misiniz?
                  <button onClick={() => confirmDelete(true)}>Evet</button>
                  <button onClick={() => confirmDelete(false)}>Hayır</button>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterList;
