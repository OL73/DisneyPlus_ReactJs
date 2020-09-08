import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'


const News = ({ nouveaute, id }) => {
    return (

        <div className="nouveaute-elt">
            <Link to={`movie/${id}`}>
                <img src={nouveaute} alt="" className="shadow"/>
            </Link>
        </div >
    )
}

export default News;
