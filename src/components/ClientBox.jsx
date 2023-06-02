import "./ClientBox.css"

const ClientBox = ({patient}) => {

    

    return(
        <div className="patientBox">
            <img className="imgBox" src={patient.imgSrc} alt={patient.nom} />
            <div className="divText">
                <h2 className="patientNom" style={{color:patient.couleur}}>{patient.nom}</h2>
                <p className="patientAvis">{patient.avis}</p>
            </div>
        </div>
    )
}

export default ClientBox;