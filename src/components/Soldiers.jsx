const Soldier = ({idBattalion,cantSoldiers,sedeName}) => {
    return(
        <div>
            <h1>{sedeName}</h1>
            <h4>{idBattalion}</h4>
            <br />
            <h2>{cantSoldiers}</h2>
            <hr />
        </div>
    )
}

export default Soldier;