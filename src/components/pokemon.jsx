const Pokemon = ({name, image, power, life, style }) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} style={style} alt="" />
            <ol>
                <li>{power}</li>
                <li>{life}</li>
            </ol>
            <hr />
        </div>
    )
}

export default Pokemon;