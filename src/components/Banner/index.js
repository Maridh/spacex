import React from 'react'
import Img from "../../assets/imagem.svg"
import "./styles.css"

const Banner = () => {
    return (
        <div className="main">
            <div>
                <h1>Descubra os lançamentos dos foguetes com a API da SpaceX.</h1>
                <p>Embarque nessa nave!</p>
            </div>
            <img src={Img} alt="Ilustração foguete" />
        </div>
    )

}

export default Banner