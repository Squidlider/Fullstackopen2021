import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MaxVotes = ({votes,anecdotes}) => {
  const maxvote = Math.max(...votes)
  var maxindex = votes.indexOf(maxvote)
  
  if(maxvote===0){
      return (
          <p> no votes </p>
      )
  }
  return (
      <p>{anecdotes[maxindex]}</p>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleClickNew = () => {
    setSelected(Math.floor(Math.random()*5))
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(votes)
}


  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Button text="New anecdote" handleClick={handleClickNew}/>
      <Button text="Vote anecdote" handleClick={addVote}/>
      <h1>Highest score</h1>
      <MaxVotes votes = {votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App