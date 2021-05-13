import React, {useState} from 'react';
import Map from '../components/Map';
import Forms from '../components/Forms';
import { Grid, Item } from 'semantic-ui-react'

const Home = () => {
  const [mineInfo, setMineInfo] = useState([])

  return (
    <Grid columns={2}>
      <Grid.Row columns={2}>
        <Item style={{paddingLeft: '1rem'}}>
          <Item.Content>
            <Item.Header as="h1">
              Mine Risk Indicator
            </Item.Header>
            <Item.Description>
              This application allows you to search for mines in B.C. to run a machine-learning algorithm predicting their risk levels.
              To use the application, select a form below. You can either select all mines by permitter, or search for a single mine
              by its details. On submission, the mine(s) and their risk level will be displayed on the map.
            </Item.Description>
          </Item.Content>
        </Item>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Map mineInfo={mineInfo}/>
        </Grid.Column>
        <Grid.Column>
          <Forms setMineInfo={setMineInfo}/>    
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;