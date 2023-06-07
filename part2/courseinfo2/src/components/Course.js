import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    console.log(course.name)
    const sum = course.parts.reduce((total, current) => total + current.exercises, 0)
    return (
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total sum={sum} />
        </>
    )
}

export default Course;