function DayColumn({ day, index, setDays }) {

  const handleAddActivity = () => {
    setDays(prevDays =>
      prevDays.map((dayObj, i) => {
        if (i === index) {
          const newActivityNumber = dayObj.activities.length + 1
          return {
            ...dayObj,
            activities: [...dayObj.activities, `Actividad ${newActivityNumber}`]
          }
        }
        return dayObj
      })
    )
  }

  return (
    <div className="day-column">
      <h2>{day.name}</h2>

      <button onClick={handleAddActivity}>+ Añadir actividad</button>

      <div>
        {day.activities.length === 0 ? (
          <p>No hay actividades para este día</p>
        ) : (
          day.activities.map((activity, i) => (
            <div key={i}>{activity}</div>
          ))
        )}
      </div>
    </div>
  )
}

export default DayColumn
