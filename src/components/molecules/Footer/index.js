import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({isPrimary}) => {
    if(isPrimary)
    {
        return (
            <footer>
                <div class="container">
                    <Link to="/projects" className="float-end fw-bolder">projects.</Link>
                    <Link to="/about" className="fw-bolder">about.</Link>
                </div>
            </footer>
        )
    }
    else
    {
        return (
            <footer className="text-muted border-top border-dark">
                <div className="container text-center py-5">
                    <p className="mb-0 text-muted">Copyright &copy; Dika L</p>
                </div>
            </footer>
        )
    }
}

export default Footer
