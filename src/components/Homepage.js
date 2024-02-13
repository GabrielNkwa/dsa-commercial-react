import React from 'react';

import Footer from '../Layout/Footer.js';
import Slider from '../Layout/Slider.js';
import Service from '../Layout/Service.js';
import About from '../Layout/About.js';
import Why from '../Layout/Why.js';
import Leadership from '../Layout/Leadership.js';
import Info from '../Layout/Info.js';
import News from '../Layout/News.js';
import Navbar from '../Layout/Navbar.js';

export default function Homepage() {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>

        <Navbar />

        <Slider />
      </div>

      <Service />

      <About />

      <Why />

      <Leadership />
      <News />
      <Info />

      <Footer />
    </div>
  );
}
