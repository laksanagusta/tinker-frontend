import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = ({image, name, brand, link}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card border border-dark shadow p-3" style={{backgroundColor:'#0D1117'}}>
                <Link to={link}>
                    <img src={image} className="card-img-top img-fluid" alt="product"/>
                </Link>
                <div className="card-body">
                    <p className="text-center card-text h5">{name}</p>
                    <div className="d-flex justify-content-center" >
                        <div className="small badge bg-warning text-dark">{brand}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject
