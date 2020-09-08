import React from 'react'
import './NotFound.css'
import { Alert } from 'antd';
import Logo from './Logo'

const NotFound = () => {
    return (
        <div className="not-found">
            <Logo />
            <Alert message="Erreur, page non trouvée !" type="warning" />
        </div>
    )
}

export default NotFound;
