import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';

function App() {
  return (
    <div className="App">
      <h1>여행 기록</h1>
      <TravelForm />
    </div>
  );
}

export default App;