import './TravelList.css'

function TravelCard({ travel, onDelete, onEdit }) {
    return (
        <div className="travel-card">
            <div className="card-image">
                {travel.image ? (
                    <img src={travel.image} alt="여행지 사진" />
                ) : (
                    <div className="no-image">✈️</div>
                )}
            </div>
            <div className='card-content'>
                <h3>{travel.name}</h3>
                <div className="location">{travel.city}, {travel.country}</div>
                <div className="date">{travel.date}</div>
                <div className="rating">{'⭐'.repeat(travel.rating)}</div>
                <div className="memo">{travel.memo}</div>
            </div>
            <div className="card-actions">
                <button className="btn-edit" onClick={() => onEdit(travel)}>수정</button>
                <button className="btn-delete" onClick={() => onDelete(travel.id)}>삭제</button>
            </div>
        </div>
    )
}

export default TravelCard