import logo from './logo.svg';

import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import ErrorPage from './components/Error';
import Homepage from './components/Homepage';
import NewsPage from './components/NewsPage';
import SinglePost from './components/SinglePost';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/news/:slug" element={<SinglePost />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
