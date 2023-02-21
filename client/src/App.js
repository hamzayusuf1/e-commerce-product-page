import "./App.css";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import NavLinks from "./components/NavLinks";

function App() {
  return (
    <div className="app">
      <NavLinks />
      <div className="mainDiv">
        <Gallery />
        <Description />
      </div>
    </div>
  );
}

export default App;
