const Moons = (moon1,moon2,moon3,moon4,moon5,moon6,style) => {
    return(
        <div>
            <div>
                <div>
                    <h1>Kokushibo </h1>
                    <img style={style} src={moon1} />
                </div>
                <div>
                    <h1>Doma </h1>
                    <img style={style} src={moon2} />
                </div>
                <div>
                    <h1>Akaza</h1>
                    <img style={style} src={moon3} />
                </div>
                <div>
                    <h1>Hantengu</h1>
                    <img style={style} src={moon4} />
                </div>
                <div>
                    <h1>Gyokko </h1>
                    <img style={style} src={moon5} />
                </div>
                <div>
                    <h1>Kaigaku </h1>
                    <img style={style} src={moon6} />
                </div>
            </div>
        </div>
    )
}

export default Moons;