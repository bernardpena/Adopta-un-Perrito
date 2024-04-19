import React from 'react'
import CardTarjeta from "./CardTarjeta"

export default function Cards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <CardTarjeta />
                </div>
                <div className="col-md-3">
                    <CardTarjeta />
                </div>
                <div className="col-md-3">
                    <CardTarjeta />
                </div>
                <div className="col-md-3">
                    <CardTarjeta />
                </div>
            </div>
        </div>
    )
}
