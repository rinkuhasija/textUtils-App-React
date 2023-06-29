import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App() {

  const [myStyles, setMyStyles] = useState({
    backgroundColor: 'white',
    color: 'black'
  })

  return (
    <div>
      <Navbar initialStyle={myStyles} setStyles={setMyStyles} title='TextUtils' />  <br />

      <div className="container" style={myStyles}>
        <TextForm styles={myStyles} heading='Enter the text to analyze' />
      </div>

    </div>
  );
}