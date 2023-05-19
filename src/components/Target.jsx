const ProfessionalCard = ({companyName, worker, profession, phoneNumber}) => {
    return(
        <div>
            <div className="target">
                <h3>{companyName}</h3>
                <h4>{worker}</h4>
                <h4>{profession}</h4>
                <h4>{phoneNumber}</h4>
            </div>
            <hr />
        </div>
    )
}

export default ProfessionalCard;