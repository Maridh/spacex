import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu'
import Img from "../../assets/foguete.svg"


const Futuro = () => {
    const [foguete, setFoguete] = useState({})


    useEffect(() => {
        const pegaDados = async () => {
            const resposta = await fetch('https://api.spacexdata.com/v4/launches/next')
            const dados = await resposta.json()
            setFoguete(dados)
        }
        pegaDados()
    }, [])

    return (
        <>
            <Menu />
            <div className="container">
                Nome: {foguete.name}<br></br>
                Número do voo: {foguete.flight_number}<br></br>
                Data: {foguete.date_local}
            </div>
            <div className="decoracao">
            <img src={Img} alt="Ilustração foguete" />
            </div>
        </>
    )
}

export default Futuro
