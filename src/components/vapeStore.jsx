const Vape = ({image,style}) => {
    return(
        <div>
            <h1>Vaping store</h1>
            <div className="vaper">
                <div>
                    <img style={style} src={image} />
                </div>
                <div className="infoProblems">
                    <h3>Problems: </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum fuga iusto numquam esse vero similique perspiciatis ad,
                         voluptatibus libero quam quia pariatur illo, sapiente incidunt 
                         inventore cumque facere molestiae beatae
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Vape;