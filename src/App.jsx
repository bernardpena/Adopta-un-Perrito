
import './App.css'
import Header from './componentes/Header'
import MyCard from './componentes/MyCard'
import Reseña from './componentes/Reseña'
import Footer from './componentes/Footer'

import Bartolo from './assets/perrito2.jpg'
import Messi from './assets/perrito3.jpg'
import Gohan from './assets/perrito4.jpg'
import Princesa from './assets/perrito5.jpg'



const cards = [
  {
    id: 1,
    title: "Bartolo",
    imagen: Bartolo,
    descripcion: "Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!",
    text: "Husky",
    color: "badge text-bg-success"
  },
  {
    id: 2,
    title: "Messi",
    imagen: Messi,
    descripcion: "Es un Juguetón amigable y se lleva bien con niños y otros animales. !Haz de Messi parte de tu Familia hoy Mismo!",
    text: "Labrador Retriever",
    color: "badge text-bg-primary"
  },
  {
    id: 3,
    title: "Gohan",
    imagen: Gohan,
    descripcion: "Un Perro de tamaño mediano con un corazón gigante. !Hazte amigo de Gohan y experimenta un amor incondicional!",
    text: "Golden Retriever",
    color: "badge text-bg-danger"
  },
  {
    id: 4,
    title: "Princesa",
    imagen: Princesa,
    descripcion: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. !Ayuda a Princesa a encontrar su final Feliz!",
    text: "French Bulldog",
    color: "badge text-bg-warning"
  }
]

function App() {
  // const tags = Tags2();
  return (
    <div className='App' >
      <Header />
      <div className="container fluid justify-content-center h-40 mt=3">
        <div className="row">
          {
            cards.map(card => (
              <div className="col-md-3 " key={card.id}>
                <MyCard title={card.title} imagen={card.imagen} descripcion={card.descripcion} text={card.text} color={card.color} />
              </div>
            ))
          },
        </div>
      </div>
      <Reseña />
      <Footer />

    </div>
  )
}

export default App
