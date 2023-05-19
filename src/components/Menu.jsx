const Menu = ({logo,protein, soup,mainCourse,restaurantName,dessert, style}) => {
    return(
        <div>
            <h1>{restaurantName}</h1>
            <img style={style} src={logo} />
            <h3>Today We have:</h3>
            <h4>soup: {soup}</h4>
            <h4>main course: {mainCourse}</h4>
            <h4>Protein: {protein}</h4>
            <h4>dessert: {dessert}</h4>
            <hr />
        </div>
    )
}

export default Menu;