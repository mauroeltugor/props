const Food = ({image,question}) => {
    return(
        <div>
            <div className="food">
                <div>
                    <img src={image} />
                </div>
                <div className="infoFood">
                    <h1>{question}</h1>
                    <p>
                    Bandeja Paisa is a famous Colombian culinary delight that represents the rich and diverse flavors of the region. This traditional dish consists of a generous 
                    combination of ingredients, including red beans, white rice, ground beef, fried pork belly, chorizo sausage, a sunny-side-up egg, plantains, avocado, and arepa (corn cake).
                    It is a true feast for the senses, showcasing the vibrant colors, bold spices, and mouthwatering textures that make Colombian cuisine so unique and memorable.
                    The bandeja paisa embodies the warm hospitality and cultural heritage of the Paisa region, making it a must-try dish for any food enthusiast exploring Colombian gastronomy.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Food;