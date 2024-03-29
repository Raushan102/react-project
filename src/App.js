import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Button from "./component/Button/Button";
import { useState } from "react";
import { EXAMPLES } from "./component/Data/RowData";

function App() {
  const [paragraph, setParagraph] = useState(`components`);

  function clickHandler(ele) {
    setParagraph(ele);
  }

  return (
    <div id="Header">
      <Header />
      <Main id="Main" />
      <div id="mainButton_or_Para_Container">
        <h1 id="Example">Example</h1>
        <div id="buttonContainer">
          <Button
            isSelected={paragraph === `components`}
            onClick={() => clickHandler("components")}
          >
            Components
          </Button>
          <Button
            isSelected={paragraph === `jsx`}
            onClick={() => clickHandler(`jsx`)}
          >
            jsx
          </Button>
          <Button
            isSelected={paragraph === `state`}
            onClick={() => clickHandler(`state`)}
          >
            state
          </Button>
          <Button
            isSelected={paragraph === `props`}
            onClick={() => clickHandler(`props`)}
          >
            props
          </Button>
        </div>
        <div id="paraContainer">
          <h2>{EXAMPLES[paragraph].title}</h2>
          <p>{EXAMPLES[paragraph].description}</p>
          <code>{EXAMPLES[paragraph].code}</code>
        </div>
      </div>
    </div>
  );
}

export default App;
