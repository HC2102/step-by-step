import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link className="navbar-brand" to="/home">
                    <FontAwesomeIcon icon={faCloud} />
                </Link>
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input 
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/study">STUDY REACTJS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">SIGN UP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;