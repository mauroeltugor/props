const Gallery = ({image1,image2,image3,image4,image5,image6,image7,image8,image9,style}) => {
    return (
        <div>
            <div>
                <div ><img style={style} src={image1}/> <img style={style} src={image2}/> <img style={style} src={image3}/> </div>
                <div><img style={style} src={image4}/> <img style={style} src={image5}/> <img style={style} src={image6}/> </div>
                <div><img style={style} src={image7}/> <img style={style} src={image8}/> <img style={style} src={image9}/> </div>
            </div>
        </div>
    )
}

export default Gallery;