const City = ({ city, description, map, style }) => {
    return (
        <div >
            <div className="city">
                <div className="right">
                    <h1>{city}</h1>
                    <p>{description}</p>
                </div >
                <div className="left">
                    <img src={map} style={style} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default City;