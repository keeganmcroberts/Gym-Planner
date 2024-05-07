import {useState} from 'react'
import Calendar from './calendar';


function Home() {

    const [workoutlist, setWorkoutList] = useState([{workout: ''}])

    const addWorkout = () => {
        setWorkoutList([...workoutlist, {service: ""}])
    }

    const removeWorkout = (index) =>{
        const list = [...workoutlist]
        list.splice(index, 1)
        setWorkoutList(list)
    }

  return (
    <div className="card">
        <form className="workout-form">
            <h2>Date:</h2>
                <input></input>
            <h2>Day:</h2>
                <input></input>
            <h2>Muscle Group:</h2>
                <input></input>
            <h2>Workouts:</h2>
            {workoutlist.map((singleWorkout, index) => (
            <div key="index" className="workouts">
                <input></input>
                <button onClick={()=>removeWorkout(index)}>Remove</button>
                <br></br>
                {workoutlist.length - 1 === index && 
                (
                <button onClick={addWorkout}>Add</button>
                )}
            </div>
            ))}
            <h2>Notes:</h2>
                <input></input>
        </form>
    </div>
  );
}

export default Home;