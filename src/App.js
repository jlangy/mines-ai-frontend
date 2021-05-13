import React, { PureComponent } from "react";
import Layout from "./layouts/DefaultLayout";
import Home from "./views/Home";
import About from "./views/About";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about">
              <Layout>
                <About />
              </Layout>
            </Route>
            <Route path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
