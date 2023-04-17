import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-info">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App ⛅</h1>
        <SearchForm />
      </header>
    </div>
  );
}

export default App;
