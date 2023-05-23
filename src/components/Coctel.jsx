const Coctel = ({mojito,freeCuba,daikiri,style}) =>{
    return(
        <div>
            <div className="drinks">
                <section>
                    <img src={mojito} style={style} />
                    <p className="infoDrink">
                        Mojito: The Mojito is a refreshing cocktail made with white rum, lime juice, sugar,
                         mint leaves, and soda water. It is typically served over ice in a highball glass and garnished
                          with mint sprigs and a lime wedge. The combination of tangy lime, fragrant mint, and rum creates 
                          a vibrant and invigorating flavor profile.
                    </p>
                </section>
                <section>
                    <img src={freeCuba} style={style}/>
                    <p className="infoDrink">
                        Cuba Libre: Also known as a "Rum and Coke," the Cuba Libre is a classic cocktail made with rum, cola, and lime juice.
                         It is typically served over ice in a highball glass and garnished with a lime wedge. The Cuba Libre gained popularity during
                          the early 20th century and is enjoyed for its simple and refreshing taste.
                    </p>
                </section>
                <section>
                    <img src={daikiri} style={style}/>
                    <p className="infoDrink">
                        Daiquiri: The Daiquiri is a cocktail that consists of rum, lime juice, and sugar syrup.
                         It is usually shaken with ice and strained into a chilled cocktail glass. The Daiquiri 
                         can be customized with different flavors such as strawberry, mango, or banana by adding 
                         fresh fruit or flavored syrups. It is a balanced and fruity cocktail that showcases the 
                         versatility of rum.
                    </p>
                </section>
            </div>
            <hr />
        </div>
    )
}

export default Coctel;