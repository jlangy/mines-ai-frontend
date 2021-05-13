import React from "react";
import { List } from "semantic-ui-react";
import {getRiskColour} from '../helpers';

const MineList = ({ mineInfo }) => {
  return (
    <List divided relaxed>
      {mineInfo.map((item) => {
        const {id, name, risk} = item;
        const colour = getRiskColour(risk);
        return (
          <List.Item key={id}>
            <List.Icon name="warning circle" size="large" verticalAlign="middle" color={colour} />
            <List.Content>
              <List.Header>{name}</List.Header>
              <List.Description as="a">{`This area has a risk factor of ${risk}`}</List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default MineList;
