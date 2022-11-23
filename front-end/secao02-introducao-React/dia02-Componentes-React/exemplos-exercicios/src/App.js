import React from "react";
import Greeting from "./testComponentes";

class App extends React.Component {
  render() {
    return (
      <main>
         <Greeting name="Samuel" lastName="Morais" />
      </main>
    )
  }
}

export default App;
