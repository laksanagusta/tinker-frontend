import React from 'react'
import { Link } from 'react-router-dom'

const CardDesign = ({image, name, link, tag, description}) => {
    return (
        <div className="col-md-6 mb-5">
            <a href={link} target="_blank"> 
                <div className="card border border-dark shadow p-3" style={{backgroundColor:'#0D1117'}}>
                    <img src={image} className="card-img-top img-fluid" alt="product"/>
                    <div className="card-body">
                        <p className="text-center card-text h5">{name}</p>
                        <p className="text-center text-muted small fw-lighter">{description}</p>
                        <div className="d-flex justify-content-center" >
                            <div className="small badge bg-warning text-dark">{tag}</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardDesign
