import React, { Component } from "react";
import { Header, Footer } from "./components";
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
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
