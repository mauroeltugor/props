const Calculator = ({number1, number2,operator,operator2, result}) =>{ 
    return(
        <div>
            <h1>Calculator</h1>
            <div className="calculatorDirection">
                <h3>{number1}</h3>
                <h3>{operator}</h3>
                <h3>{number2}</h3>
                <h3>{operator2}</h3>
                <h3>{result}</h3>
            </div>
            <hr />
        </div>
    )
}

export default Calculator;