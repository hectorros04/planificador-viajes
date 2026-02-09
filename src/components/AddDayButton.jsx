function AddDayButton({  days, setDays }){

    const handleAddDay = () => {

       setDays(prevDays => {
            const newDay = prevDays.length +1
            return [...prevDays,
            {name: `Día ${newDay}`, activities: []}
        ]
       })
    }


    return(
        <button onClick={handleAddDay}>Añadir dia</button>
    )
}

export default AddDayButton

