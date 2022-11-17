import React from 'react'

const ExerciseContainer = () => {
  let now = new Date();
  let twoDigitYear = now.getUTCFullYear().toString().substring(2)
  let todaysSixDigitDate = `${now.getMonth() + 1}/${now.getDate()}/${twoDigitYear}`

  return (
    <div>
      <h3>Workout {todaysSixDigitDate}</h3>
      <form>
        <input type='text' placeholder='Add Exercise...'></input>
        <button>click</button>
      </form>
    </div>
  )
}

export default ExerciseContainer
