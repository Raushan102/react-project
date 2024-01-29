import React from "react"; // Don't forget to import React if's not already imported
import SubMain from "../SubMain/SubMain"; // Make sure to import the SubMain component
/* The code is importing image files from the specified file paths. These image files are then assigned
to variables `componentsImg`, `jsxImg`, `stateImg`, and `propsImg`. These variables are used later
in the code to provide the image source for each concept in the `CORE_CONCEPTS` array. */

import "./Main.css";

import CORE_CONCEPTS from "../Data/RowData";

/**
 * The Main function in JavaScript defines an array of core concepts and returns a JSX element that
 * maps over the array to render a SubMain component for each concept.
 * @returns The Main function is returning a div element that contains multiple SubMain components.
 * Each SubMain component is rendered with an image, title, and description, which are passed as props
 * from the CORE_CONCEPTS array.
 */
export default function Main() {
  return (
    <div id="mainContainer">
      <h2>core concept</h2>

      <div id="Container">
        {CORE_CONCEPTS.map((element, index) => (
          <SubMain  key={index} {...element}/>
        ))}
      </div>
    </div>
  );
}
