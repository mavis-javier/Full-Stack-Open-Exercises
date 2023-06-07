const Total = ({ parts }) => {
    console.log(parts);
    const sum = parts.reduce(
        (total, current) => total + current.exercises, 0)
    return (
        <p><strong>Total of {sum} exercises</strong></p>
    )
}


export default Total;