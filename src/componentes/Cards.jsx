
import CardTarjeta from "./CardTarjeta"

export default function Cards() {
    return (
        <div className="container d-flex justify-content-center h-50">
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
