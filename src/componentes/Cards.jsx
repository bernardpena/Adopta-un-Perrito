
import CardTarjeta from "./CardTarjeta"

import Bartolo from '../assets/perrito2.jpg'
import Messi from '../assets/perrito3.jpg'
import Gohan from '../assets/perrito4.jpg'
import Princesa from '../assets/perrito5.jpg'

const cards = [
    {
        id: 1,
        title: "Bartolo",
        imagen: Bartolo,
        descripcion: "Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
    },
    {
        id: 2,
        title: "Messi",
        imagen: Messi,
        descripcion: "Es un Juguetón amigable y se lleva bien con niños y otros animales. !Haz de Messi parte de tu Familia hoy Mismo!"
    },
    {
        id: 3,
        title: "Gohan",
        imagen: Gohan,
        descripcion: "Un Perro de tamaño mediano con un corazón gigante. !Hazte amigo de Gohan y experimenta un amor incondicional!"
    },
    {
        id: 4,
        title: "Princesa",
        imagen: Princesa,
        descripcion: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. !Ayuda aPrincesa a encontrar su final Feliz"
    }
]

export default function Cards() {
    return (
        <div className="container justify-content-center h-50">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <CardTarjeta title={card.title} imagen={card.imagen} descripcion={card.descripcion} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
