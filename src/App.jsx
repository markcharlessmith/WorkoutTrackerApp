import { useState } from 'react';
import './styles.css';
import MyWorkoutsContainer from './components/MyWorkoutsContainer';
import CurrentWorkout from './components/CurrentWorkout';
import ExerciseSelectorContainer from './components/ExerciseSelectorContainer';
import Footer from './components/Footer';
import Man from './assets/man-lifting-weights.png';
import Bicep from './assets/flexed-biceps.png';
// import { useEffect } from 'react';
const emojis = { Man, Bicep }

function App() {
  // states
  const [count, setCount] = useState(0)
  // state for exercises
  const [exercises, setExercises] = useState({});
  // state for workouts
  const [workouts, setWorkouts] = useState([]);

  const [isHovered, setHovered] = useState(false);

  // functions for CRUD functionality
  // const addWorkout = () => {
  //   fetch('http://localhost:5173/api/workout', {
  //     method: 'Post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({

  //     })
  //   })
  // }
  // const getWorkout = () => {}
  // const updateWorkout = () => {}
  // const deleteWorkout = () => {}

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <button className='emojibutton'
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}>
       {isHovered ? <img src={Bicep}/> : <img src={Man}/>}
      </button>
     
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
