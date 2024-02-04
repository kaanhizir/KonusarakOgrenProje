import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching episode detail:', error);
      }
    };
    fetchCharacterDetail();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='episode-detail'>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.location.name}</p>
      
      
      
    </div>
  );
};

export default CharacterDetail;