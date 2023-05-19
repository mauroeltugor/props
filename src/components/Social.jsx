const SocialMedia = ({ name, image,style }) => {
    return (
        <div>
            <div className="appHeader">
                <h2 className="appLogo">findam</h2>
                <h3>config  -  chat  - notification -  {name}</h3>
            </div>
            <div className="appBody">
                <div className="appLeft">
                    <ul>
                        <li>laura</li>
                        <li>pedro</li>
                        <li>jose</li>
                        <li>sara</li>
                    </ul>
                </div>
                <div className="appRight">
                    <h5>News</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vero, quisquam perferendis aliquid asperiores laudantium numquam fuga accusamus. Placeat repudiandae
                        rem aut omnis accusamus fugiat nisi quam earum quisquam temp</p>
                    <img src={image} style={style} alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SocialMedia;