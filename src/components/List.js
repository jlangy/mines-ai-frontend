import React from "react";
import { List, Header, Button } from "semantic-ui-react";
import {getRiskColour} from '../helpers';

const MineList = ({ mineInfo, setMineInfo, setMapCenter }) => {
  const minesSelected = mineInfo.length > 0;
  const handleClick = (lat, long) => {
    setMapCenter([lat, long])
  }
  return (
    <>
    {minesSelected && <Header>Below is a list of selected mines. Click one to center on the map.</Header>}
    <List divided relaxed>
      {mineInfo.map((item) => {
        const {id, mine_name: name, risk, latitude, longitude} = item;
        const colour = getRiskColour(risk);
        return (
          <List.Item key={id} onClick={() => handleClick(latitude, longitude)}>
            <List.Icon name="warning circle" size="large" verticalAlign="middle" color={colour} />
            <List.Content>
              <List.Header as="a">{name}</List.Header>
              <List.Description as="a">{`This area has a ${risk ? 'high': 'low'} risk factor`}</List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
    {minesSelected && <Button color='red' onClick={() => setMineInfo([])}>Clear List</Button>}
    </>
  );
};

export default MineList;
