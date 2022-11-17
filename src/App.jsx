import { useState } from 'react'
import './styles.css'
import MyWorkoutsContainer from './components/MyWorkoutsContainer'
import ExerciseContainer from './components/ExerciseContainer'
import ExerciseSelectorContainer from './components/ExerciseSelectorContainer'
import Emoji from './assets/man-lifting-weights.png'

function App() {
  // states
  const [count, setCount] = useState(0)
  // state for exercises
  const [exercises, setExercises] = useState({});
  // state for workouts
  const [workouts, setWorkouts] = useState([]);


  // functions for CRUD functionality
  const addWorkout = () => {
    fetch('http://localhost:5173/api/workout', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    })
  }
  const getWorkout = () => {}
  const updateWorkout = () => {}
  const deleteWorkout = () => {}

  return (
    <div className="App">
      <h1>Workout Tracker!💪</h1>
      <img src={Emoji} className='emoji' alt='man-lifting-weights' />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='containers'>
      <div className='MyWorkoutsContainer'>
      <MyWorkoutsContainer/>
      </div>
      <div className='ExerciseContainer'>
      <ExerciseContainer/>
      </div>
      <div className='ExerciseSelectorContainer'>
        <ExerciseSelectorContainer/>
      </div>
      </div>
    </div>
  )
}

export default App
