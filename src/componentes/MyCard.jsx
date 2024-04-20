import App from "../App"

export default function MyCard({ title, imagen, descripcion }) {
    return (
        <div className="card text-center bg-dark">
            <img src={imagen} alt="imagen1" />
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{descripcion}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
