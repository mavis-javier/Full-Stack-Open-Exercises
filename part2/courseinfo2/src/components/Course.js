import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => {   
    const courseSum = courses.map(
      course => {
        const test = course.parts.reduce(
          (total, current) => total + current.exercises, 0)
        console.log(test);
        return (
          course.parts.reduce(
            (total, current) => total + current.exercises, 0)
        )
      }
    )
    console.log(courseSum);    
    
    return (
        <>
           {courses.map( course => 
            <div key={course.id}>
              <Header name={course.name} />
              <Content parts={course.parts} />
              <Total parts={course.parts} />
            </div>            
           )}
        </>
    )
}

export default Course;