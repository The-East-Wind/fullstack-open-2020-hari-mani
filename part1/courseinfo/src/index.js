import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Content = (props) => {
  const[part1,part2,part3] = props.parts;
  console.log(part1,part2,part3);
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}

const Total = (props) => (
  <p>Number of exercises {props.exercises.reduce((a,b)=>a+b,0)}</p>
);

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part=>part.exercises)} />
    </div>
  )
};

ReactDOM.render(<App />,document.getElementById('root'));

