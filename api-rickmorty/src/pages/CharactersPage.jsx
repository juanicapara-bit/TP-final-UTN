import useRickAndMortyApi from '../hooks/useRickAndMortyApi'
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'

function CharactersPage() {

   const { characters, error, info, loading, onNext, onPrevious } = useRickAndMortyApi()

    if(loading){
        return (
            <div>
                <span> Cargando todos los personajes disponibles... </span>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h4> Error al cargar datos 😐 </h4>
                <span> {error.message} </span>
            </div>
        )
    }

  return (
    <div className='container mx-auto px-4 mt-5'>
        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />
        <Characters characters={characters} />
        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

export default CharactersPage