import { useState } from "react";
import "./App.css";

function App() {
  // 처음 실행 시 localStorage에 저장된 데이터가 있으면 가져오고,
  // 없으면 더미 데이터를 저장해서 사용
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("travel");

    if (savedData) {
      return JSON.parse(savedData);
    }

    const defaultData = {
      id: Date.now(),
      여행지이름: Date.now().toString(),
      국가: Date.now().toString(),
      도시: Date.now().toString(),
      방문날짜: new Date().toISOString().split("T")[0],
      사진URL: "https://via.placeholder.com/150",
      평점: 5,
      여행지메모: "정말 아름다웠어요!",
    };

    localStorage.setItem("travel", JSON.stringify(defaultData));

    return defaultData;
  });

  // Update
  const handleUpdate = () => {
    const updatedData = {
      ...data,
    };

    setData(updatedData);

    localStorage.setItem("travel", JSON.stringify(updatedData));

    alert("수정되었습니다.");
  };

  return (
    <div className="App">
      <h1>게시글 수정</h1>

      <div>
        <label>
          여행지 이름:
          <input
            type="text"
            value={data.여행지이름}
            onChange={(e) =>
              setData({ ...data, 여행지이름: e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label>
          국가:
          <input
            type="text"
            value={data.국가}
            onChange={(e) => setData({ ...data, 국가: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          도시:
          <input
            type="text"
            value={data.도시}
            onChange={(e) => setData({ ...data, 도시: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          방문 날짜:
          <input
            type="date"
            value={data.방문날짜}
            onChange={(e) => setData({ ...data, 방문날짜: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          사진 URL:
          <input
            type="text"
            value={data.사진URL}
            onChange={(e) => setData({ ...data, 사진URL: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          평점:
          <input
            type="number"
            min="1"
            max="5"
            value={data.평점}
            onChange={(e) => setData({ ...data, 평점: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          여행지 메모:
          <textarea
            value={data.여행지메모}
            onChange={(e) => setData({ ...data, 여행지메모: e.target.value })}
          />
        </label>
      </div>

      <button onClick={handleUpdate}>수정</button>
    </div>
  );
}

export default App;