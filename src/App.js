import React from 'react';
import './App.css';
import Person from "./components/Person";
 
function App() {
  return (
    <div className="App">
      <Person firstName="Kevin" lastName="Bluth" age={23} hairColor="Brown" />
    </div>
  );
}

export default App;
