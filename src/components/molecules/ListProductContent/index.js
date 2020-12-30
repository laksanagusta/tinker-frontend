import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import './listProductContent.scss'

const ListProductContent = ({image, description, title, position}) => {
    if(position === "right") {
        return (
            <div className="row mb-5">
                <div className="col-md-7">
                    <img src={image} className="img-fluid rounded shadow product-content-image mb-3" alt="product"/>
                </div>
                <div className="col-md-5 align-self-center px-3">
                    <div className="mt-2">
                        <h4 className="fw-bold" style={{color:'LightBlue'}}>{title}</h4>
                        <div className="text-secondary">{ReactHtmlParser(description)}</div>
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
                        <h4 className="fw-bold" style={{color:'LightBlue'}}>{title}</h4>
                        <div className="text-secondary">{ReactHtmlParser(description)}</div>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={image} className="img-fluid product-content-image rounded shadow mb-3" alt="product"/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="mb-5">
                <div className="mt-2 mb-5 d-flex justify-content-center">
                    <img src={image} className="img-fluid shadow product-content-image mb-3" alt="product"/>
                </div>
                <div className="mt-2 mb-5">
                    <h4 className="fw-bold" style={{color:'LightBlue '}}>{title}</h4>
                    <div className="text-secondary">{ReactHtmlParser(description)}</div>
                </div>
            </div>
        )
    }
}

export default ListProductContent
