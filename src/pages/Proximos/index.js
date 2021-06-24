import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu'
import Img from "../../assets/foguete.svg"

const Proximos = () => {
    const [foguetes, setFoguetes] = useState([])


    useEffect(() => {
        const pegaDados = async () => {
            const resposta = await fetch('https://api.spacexdata.com/v4/launches/upcoming')
            const dados = await resposta.json()
            setFoguetes(dados)
        }
        pegaDados()
    }, [])

    return (
        <>
            <Menu />
            <ul>
                {foguetes.map(nave => (
                    <li>
                        <h3>Nome: {nave.name}</h3>
                        <p>Número do voo: {nave.flight_number}</p>
                        <p>Hora local: {nave.date_local}</p>
                        <img src={nave.links.patch.small} alt="Ilustração do foguete" />
                    </li>
                ))}
            </ul>
            <div className="decoracao">
            <img src={Img} alt="Ilustração foguete" />
            </div>
        </>
    )
}

export default Proximos
