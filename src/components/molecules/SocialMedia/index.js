import React from 'react'
import { useSelector } from 'react-redux'
import "./socialMedia.scss"

const SocialMedia = ({image, username, link, name}) => {
    const s3url = useSelector((state) => state.s3url)
    return (
        <div className="col-md-4 p-3 rounded">
            <div className="row">
                <div className="col-md-3">
                    <a href={link}>
                        <img src={`${s3url}${image}`} className="card-img-top social-image" style={{width:48}} alt="product"/>
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="text-secondary">{name}</div>
                    <small className="text-muted ">{username}</small>
                </div>                
            </div>
        </div>
    )
}

export default SocialMedia
