const Weather = ({climate, image, temperature, style}) => {
    return(
        <div>
            <h1>{climate}</h1>
            <img src={image} style={style} alt="" />
            <h3>{temperature}</h3>
            <hr />
        </div>
    )
}

export default Weather;