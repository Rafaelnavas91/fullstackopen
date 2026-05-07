import React from 'react'



const Header = (props) => {
  
  return (

    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {

  return (
    <div>
      <h2>Contenido del curso</h2>
      <h3>{props.part1}</h3>
      <p>total de ejercicios: {props.exercises1}</p>
      <h3>{props.part2}</h3>
      <p>Total de ejercicios: {props.exercises2}</p>
      <h3>{props.part3}</h3>
      <p>Total de ejercicios: {props.exercises3}</p>
    </div>
  )
}


const Total = (props) =>{

  return(
    <div>
      <p>El total de los ejercicios enttre las 3 partes seria {props.exercises1 + props.exercisSes2 + props.exercises3}</p>
    </div>
  )
}



const App = () => {
const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course={course}/>
      <Content part1 ={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}  />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>

  )
}

export default App