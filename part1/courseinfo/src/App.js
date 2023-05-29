const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

/**
 * Used in Exercises 1.1-1.2
 */
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


const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Total>
        <Content part={part1.name} exercises={part1.exercises} />
        <Content part={part2.name} exercises={part2.exercises} />
        <Content part={part3.name} exercises={part3.exercises} />
      </Total>      
    </div>  
  )
}

export default App;