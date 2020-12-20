import React from 'react'

const Education = ({title, duration, name}) => {
    return (
        <div className="col-md-6 mt-3 rounded">
            <div className="row">
                <div className="col-md-4">
                    <div>{duration}</div>
                </div>
                <div className="col-md-8">
                    <div>{name}</div>
                    <small>{title}</small>
                </div>                
            </div>
        </div>
    )
}

export default Education
