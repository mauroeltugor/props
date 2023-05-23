const Field = ({team1,idCancha1,hora1,team2,idCancha2,hora2,team3,hora3,idCancha3,style,logo1,logo2,logo3}) =>{
    return(
        <div>
            <h1>Soccer Field</h1>
            <div style={style}>
                <div className="boxSize">
                    <img className="soccer" src={logo1} />
                    <h3>{team1}</h3>
                    <h5>Time: {hora1}</h5>
                    <h5>Field number: {idCancha1}</h5>
                </div>
                <div className="boxSize">
                    <img className="soccer" src={logo2} />
                    <h3>{team2}</h3>
                    <h5>Time: {hora2}</h5>
                    <h5>Field number: {idCancha2}</h5>
                </div>
                <div className="boxSize">
                    <img className="soccer" src={logo3} />
                    <h3>{team3}</h3>
                    <h5>Time: {hora3}</h5>
                    <h5>Field number: {idCancha3}</h5>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Field;