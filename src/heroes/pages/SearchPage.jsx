import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks'
import { HeroCard } from '../components'
import { getheroesByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation() // * se usa para obtener query paramters y otros datos de la location

  //? const [searchParams] = useSearchParams()
  //? const q = searchParams.get('q') || ''
  //* react-router nos da un custom hook para buscar los parametros

  const { q = '' } = queryString.parse(location.search)
  const heroes = getheroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    //if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`) // * usando el navigate podemos hacer query parameters quedandonos en la misma ruta

  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button
              type='submit'
              className="btn btn-outline-primary mt-2">
              Search
            </button>

          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
              ? (<div className="alert alert-primary">Search a hero</div>)
              : (heroes.length === 0)
                && (<div className="alert alert-danger">No hero with <b>{q}</b></div>)
          } */}

          <div 
          className="alert alert-primary animate__animated animate__fadeInLeft" 
          style={{display: showSearch ? '' : 'none'}}>
            Search a hero
          </div>

          <div 
          className="alert alert-danger animate__animated animate__fadeInLeft" 
          style={{display: showError ? '' : 'none'}}>
            No hero with <b>{q}</b>
            </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>

    </>
  )
}
