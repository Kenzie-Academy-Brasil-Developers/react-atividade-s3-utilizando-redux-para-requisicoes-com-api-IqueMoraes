import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Digimons from "./components/Digimons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;
