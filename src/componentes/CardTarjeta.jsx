import React from 'react'
import Bartolo from '../assets/perrito2.jpg'


export default function CardTarjeta() {
    return (
        <div className="card">
            <img src={Bartolo} alt="imagen1" />
            <div className="card-body">
                <h4 className="card-title">Bartolo</h4>
                <p className="card-text">Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!</p>
            </div>
        </div>
    );
}
