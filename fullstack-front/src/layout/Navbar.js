import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#">Gestionaire Des Produits</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                            <Link to='/adduser' className='nav-link'>
                                <button className='btn btn-outline-light mr-2'>Add-User</button>
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link to='/addproduit' className='nav-link'>
                                <button className='btn btn-outline-light mr-2'>Ajouter_Produit</button>
                            </Link>
                        </li>






                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                <button className='btn btn-outline-light'>Logout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
