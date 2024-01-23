import ReactHeader from "../assets/react-core-concept.png";
import "./Header.css"
export default function Header() {
  return (
    <header class='Top'>
      <img src={ReactHeader} alt="react-core-concept" id="HeaderImage"  />
      <h1 id="HeaderH1">React Essentials</h1>
      <p id="HeaderPara">
        Fundamental React concept you will need for most any app you are going
        to built!
      </p>
    </header>
  );
}
