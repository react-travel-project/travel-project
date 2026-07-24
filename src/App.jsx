import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialData = [
    {
      id: 1,
      name: "에펠탑",
      country: "프랑스",
      city: "파리",
      date: "2024-07-15",
      image:
        "https://i.namu.wiki/i/yF485NWCazWq7Zd52f5DzchphPkZ4VGVZXkx57AHIygI_GHgHLQnAa2zVJXZ_hxnid6NA09bKhxSc2FeLguNzw.webp",
      rating: 5,
      memo: "정말 아름다웠어요!",
      createdAt: "2024-07-20T10:30:00",
    },
  ];

  const [countries, setCountries] = useState(() => {
    const saved = localStorage.getItem("countries");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    city: "",
    date: "",
    image: "",
    rating: 5,
    memo: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      country: "",
      city: "",
      date: "",
      image: "",
      rating: 5,
      memo: "",
    });

    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId === null) {
      const newCountry = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
      };

      setCountries([...countries, newCountry]);
    } else {
      setCountries(
        countries.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
    }

    resetForm();
  };

  const handleDelete = (id) => {
    setCountries(countries.filter((item) => item.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setFormData({
      name: item.name,
      country: item.country,
      city: item.city,
      date: item.date,
      image: item.image || "",
      rating: item.rating || 5,
      memo: item.memo || "",
    });
  };

  return (
    <div className="App">
      <h1>여행지 관리</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="여행지"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          placeholder="국가"
          value={formData.country}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="도시"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="사진 URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <textarea
          name="memo"
          placeholder="메모"
          value={formData.memo}
          onChange={handleChange}
        />

        <button type="submit">
          {editingId ? "수정 완료" : "추가"}
        </button>

        {editingId && (
          <button type="button" onClick={resetForm}>
            취소
          </button>
        )}
      </form>

      <hr />

      {countries.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>{item.name}</h2>

          <p>
            {item.country} / {item.city}
          </p>

          <p>{item.date}</p>

          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              width="250"
            />
          )}

          <p>⭐ {item.rating}</p>

          <p>{item.memo}</p>

          <button onClick={() => handleEdit(item)}>
            수정
          </button>

          <button onClick={() => handleDelete(item.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;