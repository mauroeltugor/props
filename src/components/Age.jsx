const Age = ({name, age, futureAge}) => {
    return(
        <div>
            <h1>Hello {name}</h1>
            <h3>You are {age} in 10 years you will be {futureAge}</h3>
            <hr />
        </div>
    )
}

export default Age;