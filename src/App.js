import './App.css';
import { useState } from 'react';

function App() {
  const [board, setboard] = useState(["","","","","","","","",""])
// at start all square will be empty
  return (
    <div className="App">
      <div className="board">
        
      </div>
    </div>
  );
}

export default App;
