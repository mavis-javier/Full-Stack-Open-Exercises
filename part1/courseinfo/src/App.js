const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let arr = props.parts;
  return (
    <>
      <p>{arr[0].name} {arr[0].exercises}</p>
      <p>{arr[1].name} {arr[1].exercises}</p>
      <p>{arr[2].name} {arr[2].exercises}</p>
    </>    
  )
}

/**
 * Used in Exercises 1.1-1.3
 * @param {*} props 
 * @returns total number of exercises
 */
/*
const Total = (props) => {
  const { children } = props;
  const total = children.reduce(
    (total, { props }) => total += props.exercises, 0
  );

  return (
    <>
      { children }
      <p>Number of exercises {total}</p>
    </>
  )
}
*/

const Total = (props) => {
  let arr = props.parts;
  let total = arr.reduce(
    (total, arr) => total += arr.exercises, 0
  );
  return (
    <>
      <p>Number of exercises {total}</p>
    </>    
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />     
    </div>  
  )
}

export default App;