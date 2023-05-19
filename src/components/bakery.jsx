const Bakery = ({toast, bread, coffee, milkshake}) => {
    return(
        <div>
            <h1>Mauro's pan</h1>
            <h3>Today Menu:</h3>
            <ul>
                <li>Coffe: {coffee}</li>
                <li>Bread: {bread}</li>
                <li>Milkshake: {milkshake}</li>
                <li>Toast: {toast}</li>
            </ul>
            <hr />
        </div>
    )
}

export default Bakery;