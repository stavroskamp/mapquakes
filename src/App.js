import React, { Component } from "react";
import Header from "./components/Header/Header";
import MapContainer from "./containers/MapContainer/Map";
import LegendContainer from "./containers/LegendContainer/Legend";
import Footer from "./components/Footer/Footer";
import { StyledApp, BodyWrapper } from "./App.styles";

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Header />
        <BodyWrapper>
          <MapContainer />
          <LegendContainer />
        </BodyWrapper>
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
