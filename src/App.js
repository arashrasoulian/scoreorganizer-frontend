import { useState } from 'react';
import './App.scss';
import User from './components/auth/User'

const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  return (
    <div className="App app-body-container">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
}
export default App;
