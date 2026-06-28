function Characters({ characters }) {

    if(!characters || characters.length === 0){
        return (
            <>
            <p> No encontramos los personajes! Intenta cargar otra pagina </p>
            </>
        )
    }

  return (
    <div className='row justify-content-center g-4' >
        { characters.map((character) => (
            <div key={character.id} className="col-auto mb-5 mx-4 d-flex justify-content-center" >
                <div className="card character-card" >
                <img src={character.image} alt={character.name} />
                <div className="card-body" >
                    <h5 className="card-title" > {character.name} </h5>
                    <p className="card-text"> {character.status} </p>
                    <p className="card-text"> {character.species} </p>
                    <p className="card-text"> {character.location.name} </p>
                </div>
                </div>
            </div>
        )) }
    </div>
  )
}

export default Characters