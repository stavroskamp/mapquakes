import React, { Component } from "react";
import Header from "./components/Header/Header";
import MapArea from "./containers/MapArea/MapArea";
import Legend from "./containers/Legend/Legend";
import Footer from "./components/Footer/Footer";
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
