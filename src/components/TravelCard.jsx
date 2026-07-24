import './TravelList.css'

function TravelCard({ travel, onDelete, onEdit }) {
    return (
        <div className="travel-card">
            <img className="card-image" src="{travels.image}" alt="여행지 사진" />
            <div className='card-content'>
                <h3>{travel.name}</h3>
                <div className="location">{travel.city}, {travel.country}</div>
            </div>
            <div className="date">{travel.date}</div>
            <div className="rating">{travel.rating}</div>
            <div className="memo">{travel.memo}</div>
            <button className="btn-edit" onClick={onEdit}>수정</button>
            <button className="btn-delete" onClick={onDelete}>삭제</button>
        </div>
    )
}

export default TravelCard