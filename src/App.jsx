import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App() {

  return (
    <div>
      <Navbar title='TextUtils' />  <br />

      <div className="container">

        <TextForm heading='Enter the text to analyze' />
      </div>

    </div>
  );
}