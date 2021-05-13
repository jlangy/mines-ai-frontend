import React, {useState, useEffect} from 'react';
import Map from '../components/Map';
import List from '../components/List';
import {getAllMinesData} from '../services/ai-service';
import { Grid } from 'semantic-ui-react'

const Home = () => {
  const [mineInfo, setMineInfo] = useState([])
  useEffect(() => {
    getAllMinesData()
      .then(result => {
        setMineInfo(result);
      })
  }, []);

  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Map mineInfo={mineInfo}/>
        </Grid.Column>
        <Grid.Column>
          <List mineInfo={mineInfo} key={mineInfo}/>    
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;