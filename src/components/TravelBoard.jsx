
import DayColumn from "./DayColumn"

function TravelBoard({  days = [], setDays  }){


    return(
        <div className="travel-board">
            {days.map((day,index) => (
                <DayColumn key={index} day = {day} index={index} setDays={setDays} />
            ))}
        </div>
    )
}

export default TravelBoard