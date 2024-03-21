import Header from "./components/layout/Header";
import MUIWrapper from "./MUIWrapper";
import Homepage from "./components/layout/Homepage";


import React from "react";


function App() {

  return (
    <MUIWrapper>
      <Header />
      <Homepage />
    </MUIWrapper>
  );
}

export default App;