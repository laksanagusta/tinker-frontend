import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { noAuto } from '@fortawesome/fontawesome-svg-core'
import './listProductContent.scss'

const ListProductContent = ({image, description, title, position}) => {
    if(position === "right") {
        return (
            <div className="row mb-5">
                <div className="col-md-7">
                    <img src={image} className="card-img-top rounded shadow" alt="product"/>
                </div>
                <div className="col-md-5 align-self-center px-3">
                    <div className="mt-2">
                        <h4 className="fw-bold" style={{color:'NavajoWhite '}}>{title}</h4>
                        <p className="text-secondary">{ReactHtmlParser(description)}</p>
                    </div>
                </div>
            </div>
        )
    }
    else if (position === "left") {
        return (
            <div className="row mb-5">
                <div className="col-md-5 align-self-center px-3">
                    <div className="mt-2">
                        <h4 className="fw-bold" style={{color:'NavajoWhite '}}>{title}</h4>
                        <p className="text-secondary">{ReactHtmlParser(description)}</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={image} className="card-img-top rounded shadow" alt="product"/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="mb-5">
                <div className="mt-2 mb-5 d-flex justify-content-center">
                    <img src={image} className="card-img-top shadow rounded" style={{width:700}} alt="product"/>
                </div>
                <div className="mt-2 mb-5">
                    <h4 className="fw-bold" style={{color:'NavajoWhite '}}>{title}</h4>
                    <p className="text-secondary">{ReactHtmlParser(description)}</p>
                </div>
            </div>
        )
    }
}

export default ListProductContent
