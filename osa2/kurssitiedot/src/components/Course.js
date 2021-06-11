import React from 'react'


const Header = ({course}) => {
  console.log({course})
  return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  
  
const Part = (props) => {
    return (
      <>
      <p>{props.name} {props.exercises}</p>
      </>
    )
}
  
const Content = (props) => {
    return (
      <div>
        {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
      </div>
    )
}

const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)
  
    return (
      <div>Yhteensä {parts.reduce((s, p) => s + p)} tehtävää</div>
    )
  }

const Course = (props) => {
    return (
     <div>
        <Header course={props.course} />
        <Content course={props.course}/>
        <Total course={props.course}/>
    </div>
    )
}

export default Course