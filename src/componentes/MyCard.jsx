
// import Button from 'react-bootstrap/Button';

export default function MyCard({ title, imagen, descripcion, text, color }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imagen} alt="imagen" className="card-img-top " />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{descripcion}</p>
                <span className={color}>{text}</span>
            </div>
        </div>
    );
}
