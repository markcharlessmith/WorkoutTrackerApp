import React from 'react'

const MuscleGroups = ({ text }) => {
  // will have text as an argument
  return (
    <div className='musclegroups'>
      <div className='musclegroups_text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default MuscleGroups
