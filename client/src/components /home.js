import {useState} from 'react'
import Calendar from './calendar';


function Home() {

    
    const [workoutlist, setWorkoutList] = useState([{workout: ''}])
    console.log("workout list", workoutlist)

    const addWorkout = () => {
        setWorkoutList([...workoutlist, {workout: ""}])
    }

    const removeWorkout = (index) =>{
        const list = [...workoutlist]
        list.splice(index, 1)
        setWorkoutList(list)
    }

    const handleInputChange = (e, index) => {
        const {name, value} = e.target 
        const list = [...workoutlist]
        list[index][name] = value;
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
            <div key={index} className="workouts">
                <input
                id='workout'
                name='workout'
                type='text'
                value={singleWorkout.workout}
                onChange={(e) => handleInputChange(e, index)}
                ></input>
                {workoutlist.length - 1 === index && workoutlist.length < 5 &&
                (
                <button onClick={addWorkout}>Add</button>
                )}
                {workoutlist.length > 1 && ( 
                <button onClick={()=>removeWorkout(index)}>Remove</button>
                )}

                <br></br>

            </div>
            ))}
            <h2>Notes:</h2>
                <input></input>
        </form>
    </div>
  );
}

export default Home;