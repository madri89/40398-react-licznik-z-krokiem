import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Counter App in ReactJS</h1>
      </header>
      <Counter initValue={108}/>
      <Counter initValue={1}/>
    </div>
  );
}

export default App;
