import { useState } from 'react';
import './App.css';
import Advice from './Components/Advice';

function App() {

  const [advice, setAdvice] = useState('');
  const [firstVisitor, setFirstVisitor] = useState(true);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setFirstVisitor(false);
  }

  return (
    <div className="App">
      <Advice firstVisitor={firstVisitor} advice={advice} />
      <button onClick={getAdvice}>Advise me</button>
    </div>
  );
}

export default App;
