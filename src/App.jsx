import {  useState  } from "react"
import DayColumn from "./components/DayColumn"
import AddDayButton from './components/AddDayButton'
import TravelBoard from './components/TravelBoard'
import Header from './components/Header'



function App() {

  const [days, setDays] = useState([

    {name: "Día 1", activities : [] },
    {name: "Día 2", activities : [] },
    {name: "Día 3",activities : [] }

  ])


  return (
    <>
     <Header />
     <TravelBoard days={ days } setDays={ setDays }/>
     <AddDayButton days={ days } setDays={ setDays }/>
    </>
  )
}

export default App
