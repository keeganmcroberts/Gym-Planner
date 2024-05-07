import {useState} from 'react'
import Calendar from './calendar';


function Home() {

    const [workoutlist, setWorkoutList] = useState([{workout: ''}, {workout: ''}])

    function addWorkout(){

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
                {workoutlist.length - 1 === index && 
                (
                <button>Add</button>
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