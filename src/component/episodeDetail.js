import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EpisodeDetail = () => {
  const { id } = useParams();

  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisodeDetail = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setEpisode(response.data);
      } catch (error) {
        console.error('Error fetching episode detail:', error);
      }
    };
    fetchEpisodeDetail();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className='episode-detail'>
      <h1>{episode.name}</h1>
      <p>{episode.air_date}</p>
      
    </div>
  );
};

export default EpisodeDetail;