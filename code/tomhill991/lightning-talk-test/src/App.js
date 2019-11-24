import React from 'react';
import logo from './logo.svg';
import './App.css';
import LightningTalk from './components/lightning-talk.js'


function App() {
    const lightningTalk = {
    title: "I will teach you to be rich",
    description: "Secure your financial future with these 3 easy steps",
    votes: 164
  }
  return (
    <div>
      < LightningTalk lightningTalk={lightningTalk} />
    </div>
  )
}

export default App;
