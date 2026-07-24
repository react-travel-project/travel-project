
import TravelList from './components/TravelList.jsx';

function App() {

  const handleDelete = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTravels(travels.filter(t => t.id !== id));
    }
  };

  const handleEdit = (travel) => {
    setEditingTravel(travel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

}

export default App;