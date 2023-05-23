const Kages = ({hokage,kazekage,mizukage,tsuchikage,raikage, style }) =>{
    return(
        <div>
            <h1>Kages</h1>
            <div className="naruto">
                <section>
                    <h1>Hokage</h1>
                    <img style={style} src={hokage} />
                </section>
                <section>
                    <h1>Kazekage</h1>
                    <img style={style}  src={kazekage} />
                </section>
                <section>
                    <h1>Mizukage</h1>
                    <img style={style} src={mizukage} />
                </section>
                <section>
                    <h1>Tsuchikage</h1>
                    <img style={style} src={tsuchikage} />
                </section>
                <section>
                    <h1>Raikage</h1>
                    <img style={style} src={raikage} />
                </section>
            </div>
            <hr />
        </div>
    )
}

export default Kages;