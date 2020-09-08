import React from 'react'
import './Compagnies.css'
import { Link } from 'react-router-dom'

const Compagnies = ({ compagnie, companyName }) => {
    return (
        <div className="compagnie-elt shadow">
            <Link to={`/company/${companyName}`}>
                <img src={compagnie} alt="" />
            </Link>
        </div>
    )
}

export default Compagnies;
