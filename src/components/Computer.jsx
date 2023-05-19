const Computer = ({ image, price, description, style }) => {
    return (
        <div>
            <div className="pcSell">
                <div>
                    <h1>{price}</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={image} style={style} alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Computer;