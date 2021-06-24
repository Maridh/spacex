import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/Passados">Lançamentos passados</Link>
                </li>
                <li>
                    <Link className="link" to="/Proximos">Lançamentos futuros</Link>
                </li>
                <li>
                    <Link className="link" to="/Realizado">Último lançamento</Link>
                </li>
                <li>
                    <Link className="link" to="/Futuro">Próximo lançamento</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu