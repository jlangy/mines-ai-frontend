import React from 'react';
import { Container, Segment, Grid, Header, List } from 'semantic-ui-react';

const Footer = ({ user }) => {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em', backgroundColor: '#003366' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contents" />
              <List link inverted>
                <List.Item as="a">Disclaimer</List.Item>
                <List.Item as="a">Privacy</List.Item>
                <List.Item as="a">Accessibility</List.Item>
                <List.Item as="a">Copyright</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Skynet AI
              </Header>
              <p>This website is produced by team Skynet as a hackathon example.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;