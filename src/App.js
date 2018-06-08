import React, { Component } from "react";
import { Header } from "./components";
import { MapArea, Legend } from "./containers";
import { StyledApp, BodyWrapper } from "./App.styles";

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Header />
        <BodyWrapper>
          <MapArea />
          <Legend />
        </BodyWrapper>
      </StyledApp>
    );
  }
}

export default App;
