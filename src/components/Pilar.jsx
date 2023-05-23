const Pilar = ({rock,love,fire, wind,style}) => {
    return(
        <div>
            <h1>pillars</h1>
            <div className="naruto">
                <section>
                    <h1>rock: Gyomei Himejima</h1>
                    <img style={style} src={rock} />
                </section>
                <section>
                    <h1>love: Mitsuri Kanroji</h1>
                    <img style={style} src={love} />
                </section>
                <section>
                    <h1>fire: Kyojuro Rengoku</h1>
                    <img style={style} src={fire} />
                </section>
                <section>
                    <h1>wind: Sanemi shinazugawa</h1>
                    <img style={style} src={wind} />
                </section>
            </div>
            <hr />
        </div>
    )
}

export default Pilar;