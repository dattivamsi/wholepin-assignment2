import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import ArtifactGrid from './components/ArtifactGrid';
import { Data } from './components/Data';
import './App.css';

const App = () => {
  
  const [showFilter,setShowFilter] = useState(false)
  const [filter, setFilter] = useState({
    searchTerm: '',
    startYear: 100,
    endYear: 1700,
    material: '',
    dynasty: '',
    region: ''
  });

  
  const filteredArtifacts = Data?.filter((artifact) => {
    const periodData = parseInt(artifact.period, 10);
    const titleMatch = (artifact?.title?.toLowerCase().includes(filter?.searchTerm?.toLowerCase())||(artifact?.description?.toLowerCase().includes(filter?.searchTerm?.toLowerCase())));
    const yearMatch = !isNaN(periodData) && periodData >= filter.startYear && periodData <= filter.endYear;
    const materialMatch = artifact?.material?.toLowerCase().includes(filter?.material.toLowerCase());
    const dynastyMatch = artifact?.density?.toLowerCase().includes(filter?.dynasty.toLowerCase());
    const regionMatch = artifact?.region?.toLowerCase().includes(filter?.region.toLowerCase());

    return titleMatch && yearMatch && dynastyMatch && materialMatch && regionMatch;
  });

  console.log(filteredArtifacts)

  return (
    <div className="app">
      <Header setSearchTerm={setFilter} setShowFilter={setShowFilter} filter={showFilter}/>
      <div className="main-content">
        <Filter setFilter={setFilter} showFilter={showFilter} setShowFilter={setShowFilter}/>
        <ArtifactGrid artifacts={filteredArtifacts} />
      </div>
    </div>
  );
};

export default App;
