const Gym = ({weight,height, image}) =>{
    return(
        <div>
            <div className="imcDirect">
                <div>
                    <h1>body mass index</h1>
                    <h3>Weight: {weight}</h3>
                    <h3>Height: {height}</h3>
                    <h3>Your body mass index is {weight / (height*height)}</h3>
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Gym;