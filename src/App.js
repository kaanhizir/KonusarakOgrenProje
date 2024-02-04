import React , { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/header";
import CharacterList from "./component/characters";
import EpisodeList from "./component/episodes";
import EpisodeDetail from "./component/episodeDetail";
import CharacterDetail from "./component/charactersDetail";



const App = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <Router>
      <div>
        <Header onSearch={handleSearch}/>
        <div className="chrc">
          
          <Routes>
          <Route
              path="/"
              element={<CharacterList searchQuery={searchQuery} />}/>
              <Route path="/characters" element={<CharacterList searchQuery={searchQuery} />} />
            <Route path="/" element={<CharacterList />} />
            <Route path="/characters" element={<CharacterList/>}/>
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Routes>
          
        </div>

        <div className="epsd">
        
          <Routes>
          <Route
              path="/"
              element={<EpisodeList searchQuery={searchQuery} />} 
            />
            <Route path="/episodes" element={<EpisodeList searchQuery={searchQuery} />} />
            <Route path="/" element={<EpisodeList />} />
            <Route path="/episodes" element={<EpisodeList/>}/>
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
          </Routes>
        </div>

          
        
      </div>
    </Router>
    
  );
};

export default App;