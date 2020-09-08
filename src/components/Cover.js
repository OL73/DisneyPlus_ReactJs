import React from 'react'
import './Cover.css'
import { Link } from 'react-router-dom'

const Cover = ({ coverRandom, id }) => {
    return (
        <div className="cover-elt">
            <Link to={`/movie/${id}`}>
                <img src={coverRandom} alt="" className="shadow"/>
            </Link>
        </div>
    )
}

export default Cover;
