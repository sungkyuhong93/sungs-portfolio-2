import React from 'react'
import { Link } from "gatsby";
import logo from "../images/sung.png"

const Header = () => {
    return (
        <div class="row">
            <div class="col">
                <Link>
                    <img src={logo} />
                </Link>
            </div>
            <div class="col">
                <a className="header-projects-link" href="#projects">Projects</a>
            </div>
        </div>
    )
}

export default Header;
