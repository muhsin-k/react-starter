import React from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => (
  <div className="container">
    <Header title="Trending Movies in India" />
    <div>
      <Home />
    </div>
  </div>
);

export default App;
