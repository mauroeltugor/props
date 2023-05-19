const Barber = ({logo, name,address,price,price2,price3,style}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img style={style} src={logo}/>
            <h3>{address}</h3>
            <h3>Catalogue</h3>
            <ul>
                <li>Basic haircut: {price}</li>
                <li>Haircut and beard: {price2}</li>
                <li>Haircut, beard and facial spa {price3}</li>
            </ul>
            <hr />
        </div>
    )
}

export default Barber;