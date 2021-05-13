import React from "react";
import { List, Header } from "semantic-ui-react";
import {getRiskColour} from '../helpers';

const MineList = ({ mineInfo, setMapCenter }) => {
  const minesSelected = mineInfo.length > 0;
  const handleClick = (lat, long) => {
    setMapCenter([lat, long])
  }
  return (
    <>
    {minesSelected && <Header>Below is a list of selected mines. Click one to target on the map.</Header>}
    <List divided relaxed>
      {mineInfo.map((item) => {
        const {id, name, risk, lat, long} = item;
        const colour = getRiskColour(risk);
        return (
          <List.Item key={id} onClick={() => handleClick(lat, long)}>
            <List.Icon name="warning circle" size="large" verticalAlign="middle" color={colour} />
            <List.Content>
              <List.Header as="a">{name}</List.Header>
              <List.Description as="a">{`This area has a risk factor of ${risk}`}</List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
    </>
  );
};

export default MineList;
