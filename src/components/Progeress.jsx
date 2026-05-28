import React from 'react'

const Progress = ({ index, point, questionsNumber, questions, answer }) => {

  const maxPossiblePoint = questions.reduce((prev, cur) => prev + cur.points, 0)

  return (
    <div className='progress'>
        <progress max={questionsNumber} value={index + Number(answer !== null)} />

        <p>Question <strong>{index + 1}</strong> / {questionsNumber}</p>
        <p><strong>{point}</strong> / {maxPossiblePoint}</p>
    </div>
  )
}

export { Progress };