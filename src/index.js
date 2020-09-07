import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Nav from './components/Nav'
import Trending from './components/Trending'
import Artists from './components/Artists'
import Stickers from './components/Stickers'

function App() {
  return (
    <div>
      <Nav />

      <Trending />

      <Artists />

      <Stickers />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

