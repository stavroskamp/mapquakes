import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Toast } from "./components";
import { Header, MapArea, Legend } from "./containers";
import { StyledApp, BodyWrapper } from "./App.styles";

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Header />
        <BodyWrapper>
          <Toast />
          <Legend />
          <MapArea />
        </BodyWrapper>
      </StyledApp>
    );
  }
}

export default hot(module)(App);
