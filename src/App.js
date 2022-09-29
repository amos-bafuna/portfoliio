import "./App.css";
import Header from "./components/Header/Header";
import Wavemain from "../src/img/wavemain.png";
import Main from "./components/Main/Main";
import About from "./components/About/About";

function App() {
  return (
    <div className="container">
      <div className="header_main">
        <Header />
        <Main />
        <div className="wave_main">
          <img src={Wavemain} alt="" />
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
