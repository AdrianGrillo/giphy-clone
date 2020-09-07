import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Nav from './components/Nav'
import Trending from './components/Trending'
import Artists from './components/Artists'

function App() {
  return (
    <div>
      <Nav />

      <Trending />

      <Artists />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

