import React from 'react'

const StartScreen = ({ questions, dispatch }) => {
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz !</h2>
        <h3><strong className='QuestionNum'>{questions.length}</strong> questions for test your React mastry</h3>
        <button className='btn btn-ui' onClick={() => dispatch({ type: 'start' })}>Let's Start</button>
    </div>
  )
}

export { StartScreen };