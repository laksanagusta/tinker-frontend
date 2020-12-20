import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({isPrimary, activePage}) => {
    if(isPrimary) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                <div className="container mt-4">
                    <Link className="navbar-brand fw-bold" to="/">ANTARDIXA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="d-flex navbar-nav me-auto">

                        </ul>
                        <ul className="d-flex navbar-nav">
                            <a className="nav-link float-end fw-bolder" aria-current="page" href="#">say hello.</a>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                <div className="container mt-4">
                    <Link className="navbar-brand fw-bold" to="/">ANTARDIXA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="d-flex navbar-nav me-auto">

                        </ul>
                        <ul className="d-flex navbar-nav">
                            <Link className={`nav-link fw-bolder ${activePage == "project" ? "active" : ""}`} to="/projects">projects</Link>
                            <Link className={`nav-link fw-bolder ${activePage == "about" ? "active" : ""}`} to="/about">about</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
