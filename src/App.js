import React from 'react';
import './App.css';
import Person from "./components/Person";
 
function App() {
  return (
    <div className="App">
      <Person firstName="Kevin" lastName="Bluth" age={23} hairColor="Brown" />
      <Person firstName="Doug" lastName="Red" age={38} hairColor="Brown" />
      <Person firstName="Lisa" lastName="Orange" age={16} hairColor="Brown" />
      <Person firstName="Kate" lastName="Yellow" age={71} hairColor="Brown" />
    </div>
  );
}

export default App;
