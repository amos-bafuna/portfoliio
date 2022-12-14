import './App.css';
import Header from './components/Header/Header';
import Wavemain from '../src/img/wavemain.png';
import formWave from '../src/img/form_wave.png';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="header_main">
        <Header />
        <Main />
        <div className="wave">
          <img src={Wavemain} alt="" />
        </div>
      </div>
      <About />
      <div className="services_section">
        <Services />
        <div className="wave">
          <img src={formWave} alt="" />
        </div>
      </div>
      <div className="contact_section">
        <Contact />
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
