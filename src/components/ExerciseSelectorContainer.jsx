import React from 'react';
import MuscleGroups from './MuscleGroups';
import ExerciseDisplay from './ExerciseDisplay';

const ExerciseSelectorContainer = () => {
  return (
    <div className='exerciseselector'>
      <h3>Select An Exercise</h3>
      <h4>Muscle Groups</h4>
      <div className='exerciseselector_musclegroups'>
      {/* <MuscleGroups /> ... use .map() */}
      <MuscleGroups text="Chest/Tris"/>
      <MuscleGroups text="Back/Bis"/>
      <MuscleGroups text="Shoulders"/>
      <MuscleGroups text="Legs"/>
      <MuscleGroups text="Core/Abs"/>
      <MuscleGroups text="Cardio"/>
      </div>
      <div className='exerciseselector_exercisedisplay'>
        <ExerciseDisplay />
      </div>
    </div>
  )
}

export default ExerciseSelectorContainer
