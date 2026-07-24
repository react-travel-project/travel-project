import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [travels, setTravels] = useState([])

  // 총 국가 수 계산
  const totalCountries = new Set(travels.map(t => t.country)).size

  return (
    <div className='App'>
      <Header totalTrips={travels.length} totalCountries={totalCountries} />
    </div>
  )
}

export default App
