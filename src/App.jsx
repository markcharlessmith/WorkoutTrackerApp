import { useState } from 'react';
import './styles.css';
import MyWorkoutsContainer from './components/MyWorkoutsContainer';
import CurrentWorkout from './components/CurrentWorkout';
import ExerciseSelectorContainer from './components/ExerciseSelectorContainer';
import Footer from './components/Footer';
import Man from './assets/man-lifting-weights.png';
import Bicep from './assets/flexed-biceps.png';
const emojis = { Man, Bicep }

function App() {
  // states
  const [count, setCount] = useState(0)
  // state for exercises
  const [exercises, setExercises] = useState({});
  // state for workouts
  const [workouts, setWorkouts] = useState([]);

  const [emoji, setEmoji] = useState(emojis.Man);


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
      <h1>Workout Tracker</h1>
      <button className='emojibutton' onClick={() => {setEmoji(emojis.Bicep); console.log(emoji)}}>
      <img src={emoji} className='emoji' alt='emoji' />
      </button>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className='containers'>
        <div className='MyWorkoutsContainer'>
        <MyWorkoutsContainer/>
       </div>
        <div className='CurrentWorkout'>
        <CurrentWorkout/>
        </div>
        <div className='ExerciseSelectorContainer'>
        <ExerciseSelectorContainer/>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default App
