import './App.css';
import { CounterContext } from './CounterContext';
import { useState } from 'react';
import Book from './Book';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div className="App">
        <h1>App component</h1>
        
        <button type="button" class="btn btn-success">Green</button>
        <button type="button" class="btn btn-warning">Yellow</button>
        <button type="button" class="btn btn-primary">BLue</button>
        
        <div style={{width: '100%', float:'left', marginTop: '10px'}}>
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </CounterContext.Provider>
  );
}

export default App;