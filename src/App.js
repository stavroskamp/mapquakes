import React, { Component } from "react";
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
          <MapArea />
          <Legend />
        </BodyWrapper>
      </StyledApp>
    );
  }
}

export default App;
