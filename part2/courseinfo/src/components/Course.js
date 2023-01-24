const Course = ({courses}) => {
    return (
      courses.map(
        course => {
          return (
            <div key={course.name}>
              <h1>{course.name}</h1>
              {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
              <b>Total of {course.parts.reduce((x,y) => x+y.exercises, 0)} exercises</b>
            </div>
          )
        }
      )
    )
  }
  
export default Course