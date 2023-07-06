import React from 'react'
import {Link} from "react-router-dom"
import "../../App.css"
import Search from './Search'

const Header = () => {
  return (
    <>
        <header>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to={"/"}>Ecommerce</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Search />
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header