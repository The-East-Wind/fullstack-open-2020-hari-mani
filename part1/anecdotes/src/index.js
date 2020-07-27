import React,{ useState } from 'react';
import ReactDOM from 'react-dom';

const TopVoted = ({anecdotes,votes}) => {
  let topVote = votes.reduce((a,b)=>b>a?b:a);
  if(topVote===0){
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        No vote has been cast for any anecdote
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <Display anecdote={anecdotes[votes.indexOf(topVote)]} vote={topVote}/>
    </div>
  )
}
const Display = ({anecdote,vote})=>(
  <div>
    {anecdote}<br/>
    has {vote} votes
  </div>
)
const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes,setVote] = useState(new Array(props.anecdotes.length).fill(0));
  const nextAnecdote = ()=>{
    let next = Math.floor(props.anecdotes.length*Math.random());
    setSelected(next);
  }
  const castVote = () => {
    let copy = [...votes];
    copy[selected]++;
    setVote(copy);
  }
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Display anecdote={anecdotes[selected]} vote={votes[selected]} />
        <div>
          <Button handleClick={castVote} text='vote' /> 
          <Button handleClick={nextAnecdote} text='next anecdote' />
        </div>
      </div>
      <TopVoted anecdotes={props.anecdotes} votes={votes} /> 
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
