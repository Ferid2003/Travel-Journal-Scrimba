import React from "react"
import "../card.css"

function Card(props) {
    return (
        <main>
            <div className="container">
                <img className="card-img" src={`../../public/images/${props.info.coverImg}`} alt="img"/>
                <div className="info">
                    <div className="first-row">
                        <img className="dot-img" src="../../public/images/path.png" alt="dot"/>
                        <span>{props.info.location}</span>
                        <a href={props.info.link} target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.info.title}</h1>
                    <p className="date">{props.info.date}</p>
                    <p className="card-info">{props.info.description}</p>
                </div>
            </div>
        </main>
    )
}
export default Card