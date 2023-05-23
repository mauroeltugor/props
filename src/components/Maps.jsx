const Map = ({image, tittle}) => {
    return(
        <div>
            <div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <h3>{tittle}</h3>
                    <p>
                        The Cathedral of Murcia is an impressive religious building located in the center of the city of Murcia, Spain.
                        Officially known as the Holy Church Cathedral Basilica Metropolitan of Santa Maria, its construction began in the 14th 
                        century and was completed in the 18th century, resulting in a combination of architectural styles ranging from Gothic to Baroque.
                        The cathedral's main facade stands out with its elegant Gothic design, adorned with ornamental details and sculptures depicting various
                        religious scenes. Inside, numerous chapels, altars, and artworks can be admired, including paintings, altarpieces, and sculptures by
                        renowned artists. One of its most notable features is the famous bell tower, known as La Giralda de Murcia, which stands approximately
                        93 meters tall and offers breathtaking panoramic views of the city from its viewpoint. The Cathedral of Murcia is considered one of
                        the main architectural landmarks in the region of Murcia and attracts visitors from around the world due to its artistic beauty and
                        historical significance. It is an active place of worship and a significant tourist destination, providing visitors with the 
                        opportunity to explore the history and culture of the city of Murcia.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Map;