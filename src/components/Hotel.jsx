const HotelReser = ({rooms, days, people, nameReserv }) => {
    return (
        <div>
            <h1>Hello {nameReserv} your reservation info is: </h1>
            <h3>People: {people}</h3>
            <h3>Days: {days}</h3>
            <h3>rooms: {rooms}</h3>
        </div>
    )
}

export default HotelReser;