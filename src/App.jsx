import { useEffect, useState } from "react";
import "./App.css";
import TravelForm from './components/TravelForm';
import Header from './components/Header';
import TravelList from './components/TravelList';

function App() {
  const [countries, setCountries] = useState(() => {
    const saved = localStorage.getItem("countries");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingId, setEditingId] = useState(null);

  // 총 국가 수 계산
  const totalCountries = new Set(countries.map(t => t.country)).size

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const handleAdd = (newTravel) => {
    setCountries((prev) => [...prev, newTravel]);
  };

  const handleUpdate = (updatedTravel) => {
    setCountries((prev) =>
      prev.map((item) => (item.id === updatedTravel.id ? updatedTravel : item))
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setCountries((prev) => prev.filter((item) => item.id !== id));

    if (editingId === id) {
      setEditingId(null);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const editingTravel = countries.find((item) => item.id === editingId) || null;

  return (
    <div className="App">
      <Header totalTrips={countries.length} totalCountries={totalCountries} />
      <TravelForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
        editingTravel={editingTravel}
      />
      <TravelList travels={countries} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;