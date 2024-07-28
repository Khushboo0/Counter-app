import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}> Increase </button>
      <button onClick={()=>setCount(count-1)}> Increase </button>
    </div>
  );
}

export default App;