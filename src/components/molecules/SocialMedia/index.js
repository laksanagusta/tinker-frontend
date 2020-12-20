import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { Link } from 'react-router-dom'
import "./socialMedia.scss"

const SocialMedia = ({image, username, link, name}) => {
    return (
        <div className="col-md-4 p-3 rounded">
            <div className="row">
                <div className="col-md-3">
                    <a href={link}>
                        <img src={"http://localhost:5000/"+image} className="card-img-top social-image" style={{width:48}} alt="product"/>
                    </a>
                </div>
                <div className="col-md-8">
                    <div>{name}</div>
                    <small className="text-muted ">{username}</small>
                </div>                
            </div>
        </div>
    )
}

export default SocialMedia
