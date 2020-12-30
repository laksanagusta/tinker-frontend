import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({isPrimary, activePage}) => {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container my-2">
                    <Link className="navbar-brand fw-bold" to="/">DIKACONCEPT</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-center navbar-collapse collapse" id="navbarNav">
                        <ul className="d-flex navbar-nav me-auto">

                        </ul>
                        <ul className="d-flex navbar-nav">
                            <Link className={`nav-link ${activePage === "home" ? "active" : ""}`} to="/">Home</Link>
                            <Link className={`nav-link ${activePage === "project" ? "active" : ""}`} to="/projects">Project</Link>
                            <Link className={`nav-link ${activePage === "about" ? "active" : ""}`} to="/about">About</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar;
