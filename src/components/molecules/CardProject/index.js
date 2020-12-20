import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = ({image, name, brand, link}) => {
    return (
        <div className="col-md-4 mb-2">
            <div className="card p-3">
                <Link to={link}>
                    <img src={image} className="card-img-top" alt="product"/>
                </Link>
                <div className="card-body">
                    <p className="card-text text-center h5">{name}</p>
                    <div className="text-center small text-muted">{brand}</div>
                </div>
            </div>
        </div>
    )
}

export default CardProject
