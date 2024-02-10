import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Layout/Header';
import Service from './Layout/Service';
import Why from './Layout/Why';
import Leadership from './Layout/Leadership';
import Slider from './Layout/Slider';
import About from './Layout/About';
import Info from './Layout/Info';
import Footer from './Layout/Footer';

export function App() {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>

        <Header />

        <Slider />
      </div>

      <Service />

      <About />

      <Why />

      <Leadership />

      <Info />

      <Footer />
    </div>
  );
}
export default App;
