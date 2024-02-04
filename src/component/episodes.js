import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/episodes.css';

const EpisodeList = ({ searchQuery }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode/');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Bölümler</h1>
      <div className="episode-list">
        {filteredEpisodes.map((episode) => (
          <Link to={`/episodes/${episode.id}`} key={episode.id} className="episode-card">
            <img src="/img/rickandmorty.jpg" alt={episode.name} />
            <h2>{episode.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
