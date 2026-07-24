import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name : '',
    country : '',
    city : '',
    date : '',
  })

  const initialData = [
    {
      id: 1,
      name: '에펠탑',
      country: '프랑스',
      city: '파리',
      date: '2024-07-15',
      image: 'https://i.namu.wiki/i/yF485NWCazWq7Zd52f5DzchphPkZ4VGVZXkx57AHIygI_GHgHLQnAa2zVJXZ_hxnid6NA09bKhxSc2FeLguNzw.webp',
      rating: 5,
      memo: '정말 아름다웠어요! 야경이 최고였습니다.',
      createdAt: '2024-07-20T10:30:00'
    }
  ]

  const [countries, setCountries] = useState(() => {
    const saved = localStorage.getItem("countries");

    return saved? JSON.parse(saved) : initialData;
  })

  const handleAdd = (newCountry) => {
      setCountries([...countries , {
        id: countries[countries.length-1].id + 1,
        ...newCountry
      } ])
    }
  

  const handleDelete = (id) => {
    setCountries(
      countries.filter(country => country.id !== id)

    )
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(formData)
  }

  useEffect(() => {
    console.log(countries)
  }, [countries])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="country" value={formData.country} onChange={handleChange}/>
        <input type="text" name="city" value={formData.city} onChange={handleChange}/>
        <input type="date" name="date" value={formData.date} onChange={handleChange}/>
        <button type='submit'>저장</button>
      </form>
    </div>
  )
}

export default App
