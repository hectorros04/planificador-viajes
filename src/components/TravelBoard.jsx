import DayColumn from "./DayColumn"

function TravelBoard(){
    return(
        <div className="travel-board">
            <DayColumn day="Dia 1"/>
            <DayColumn day="Dia 2"/>
            <DayColumn day="Dia 3" />
        </div>
    )
}

export default TravelBoard