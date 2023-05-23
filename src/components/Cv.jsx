const Cv = ({fullName, photo, style}) =>{
    return(
        <div>
            <div>
                <div>
                    <h1>{fullName}</h1>
                    <img style={style} src={photo} />
                </div>
                <div>
                    <p>
                        My name is andres mauricio celis I'm a Software developer student I speak spanish and basic english <br /> 
                        My SocialMedia: <br />
                        Instagram: maurocelis3 <br />
                        GitHub: mauroeltugor.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Cv;