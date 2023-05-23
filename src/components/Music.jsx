const Music = ({logo,name,duration,style}) => {
    return(
        <div>
            <div>
                <img src={logo} style={style}/>
                <h2>{name}</h2>
                <h4>{duration}</h4>
            </div>
            <hr />
        </div>
    )
}

export default Music;