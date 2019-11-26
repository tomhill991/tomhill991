import React from 'react';
import './App.css';
import LightningTalk from './components/lightning-talk.js'
import SubmitForm from './components/submit-form.js'


function App() {
    const lightningTalk = {
    title: "I will teach you to be rich",
    description: "Secure your financial future with these 3 easy steps"
  }

  // need to go over this array in order to display each lightning talk that has been added
  // const lightningTalkArray = [ lightningTalk, lightningTalk ]
  // lightningTalkArray.forEach(lt => console.log(lt))

  return (
    <div>
      < SubmitForm />
      < LightningTalk lightningTalk={lightningTalk} />
    </div>
  )
}

export default App;
