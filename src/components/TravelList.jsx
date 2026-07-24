import TravelCard from './TravelCard.jsx'
import './TravelList.css'

function TravelList({ travels, onDelete, onEdit }) {

    
    if (travels.length == 0) {
        return (
            <div className='empty-state'>
                여행지가 없습니다.
            </div>
        )
    }
    else {
        return (
            <div className='travel-list'>
                {travels.map((travel) => (
                    <TravelCard
                        key={travel.id}
                        travel={travel}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>

        )
    }

}

export default TravelList