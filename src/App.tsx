import Header from "./components/layout/Header";
import MUIWrapper from "./MUIWrapper";
import Homepage from "./components/layout/Homepage";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css"
import "./assets/styles/index.css"
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