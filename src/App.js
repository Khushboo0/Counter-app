import React from 'react';
import './App.css';
import Counter from './counter';
import useCounter from './useCounter';
import Button from './Button';

function App() {
  const { count, increase, decrease } = useCounter(0);

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increase}>Increase</Button>
      <Button onClick={decrease}>Decrease</Button>
    </div>
  );
}

export default App;

