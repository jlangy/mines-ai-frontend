import React, { useState } from 'react';
import Map from '../components/Map';

const Home = ({ user }) => {
  const [searchCriterion, setSearchCriterion] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedPolygon, setSelectedPolygon] = useState(false);

  function changeSearch(searchTerm) {
    setSearchValue(searchTerm);
    setSelectedPolygon(false);
  }

  return (
    <div>
      <Map
        center={{ lat: 52.52437, lng: 13.41053 }}
        user={user}
        searchCriterion={searchCriterion}
        searchValue={searchValue}
        selectedPolygon={selectedPolygon}
        setSelectedPolygon={setSelectedPolygon}
      ></Map>
    </div>
  );
};

export default Home;