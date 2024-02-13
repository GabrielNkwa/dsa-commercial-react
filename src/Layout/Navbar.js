import React from 'react';

export default function Navbar() {
  return (
    <>
      <header
        className="flex items-center justify-between text-white p-5"
        style={{ backgroundColor: '#0f054c' }}
      >
        <div className="logo">
          <a href="/" className="font-bold text-xl md:text-2xl lg:text-3xl">
            Defence Space Administration
          </a>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5 lg:text-lg">
              <a href="/" className="menu-btn">
                Home
              </a>
            </li>
            <li className="mr-5 lg:text-lg">
              <a href="#About" className="menu-btn">
                About Us
              </a>
            </li>
            <li className=" mr-5 lg:text-lg">
              <a href="#Services" className="menu-btn">
                Services
              </a>
            </li>
            <li className="mr-5 lg:text-lg">
              <a href="#Why" className="menu-btn">
                Why Us
              </a>
            </li>
            <li className=" mr-5 lg:text-lg">
              <a href="#Leadership" className="menu-btn">
                Leadership
              </a>
            </li>
            <li className=" mr-5 lg:text-lg">
              <a href="/news" className="menu-btn">
                News
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
