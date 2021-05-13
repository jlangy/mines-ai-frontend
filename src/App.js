
import React, { PureComponent } from 'react';
import Layout from './layouts/DefaultLayout';
import Home from './views/Home';
import 'semantic-ui-css/semantic.min.css';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Layout>
          <Home/> 
        </Layout>
      </div>
    );
  }
}

export default App;