import { useMemo } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById"

export const HeroPage = () => {

  const { id } = useParams() // * Se usa para leer los argumentos por la url y obtener el path
  const navigate = useNavigate()

  // * El use memo memoriza lo que este dentro y lo actualiza si alguna dependencia cambia
  const hero = useMemo(() => getHeroeById(id), [ id ]) // * Aqui si cambia el id cambia el valor y lo memoriza hasta que suceda otro cambio

  const onNavigateBack = ( ) => {
    navigate(-1)
  };

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3" >Characters</h5>
        <p>{hero.characters}</p>

        <button
          onClick={ onNavigateBack }
          className="btn btn-outline-primary"
        >
          Back
        </button>

      </div>
    </div>
  )
}
