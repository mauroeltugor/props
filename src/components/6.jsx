const Grade= ({student,grade1, grade2, grade3, finalGrade}) =>{
    return(
        <div>
            <h1>Hello {student}</h1>
            <h4>Your grades are {grade1}, {grade2},{grade3}</h4>
            <h4>and your final grade is {finalGrade}</h4>
        </div>
    )
}

export default Grade;