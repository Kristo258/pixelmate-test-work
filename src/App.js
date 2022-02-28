import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Menu from './components/menu/Menu';
import Popup from './components/popup/Popup';
import Sponzori from './components/sponzori/Sponzori';
import Left from './components/left-side/Left';
import Footer from './components/footer/Footer';
import AboutPx from './components/about-pixel/AboutPx';

function App() {
  return (
    <div className="App">
      <div className='logo-top'></div>
      <div className='menu'><Menu/></div>
      <div className='flex-container'>
      
      <div className='left'><Left /></div>
      <div className="form"><Form/></div>

      <div className='sponzori'><Sponzori /></div>
      </div>
      <div className='second-container'>
      <div className='about'><AboutPx /></div>


    
      </div>
      <div className='footer'><Footer /></div>
      
    </div>
  );
}

export default App;
