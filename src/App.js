import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">
          © 2022 | Designed & coded by{" "}
          <a
            href="https://singular-puppy-7d796a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maryna Vorobei
          </a>{" "}
          | Open-sourced on{" "}
          <a
            href="https://github.com/MarynaVorobei/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


