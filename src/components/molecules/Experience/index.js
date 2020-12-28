import React from 'react'

const Experience = ({title, duration, name}) => {
    return (
        <div className="col-md-6 mt-3 rounded">
            <div className="row">
                <div className="col-md-6">
                    <div className="fw-bold text-secondary">{duration}</div>
                </div>
                <div className="col-md-6">
                    <div className="fw-bold text-secondary"><b>{name}</b></div>
                    <small className="text-muted">{title}</small>
                </div>                
            </div>
        </div>
    )
}

export default Experience
