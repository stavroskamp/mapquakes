import React, { Component } from "react";
import Header from "../components/Header/Header";
import MapComponent from "../components/MapComponent/MapComponent";
import Legend from "../components/Legend/Legend";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100%;
`;

const BodyWrapper = styled.section`
  display: flex;
  height: calc(100% - 60px);
`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Header />
        <BodyWrapper>
          <MapComponent />
          <Legend />
        </BodyWrapper>
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
