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
            <footer className="text-muted mt-5 p-4 border-top">
                <div className="container text-center">
                    <p>Copyright &copy; Dika L</p>
                </div>
            </footer>
        )
    }
}

export default Footer
