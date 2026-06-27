import { useEffect, useState } from "react"



const useRickAndMortyApi = () => {
    
    const [characters, setCharacters] = useState([])

    const [info, setInfo] = useState({})
    
    const [loading, setLoading] = useState(false)
    
    const [error, setError] = useState(null)

    const initialUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL

    
    const fetchCharacters = async (url) => {
        setLoading(true)
        
        setError(null)

        try {
            
            const response = await fetch(url)
            console.log(response)

            if(!response.ok){
                
                throw new Error(`HTTP error! status ${response.status}`)
            }
           
            const data = await response.json()
            console.log(data)
            setCharacters(data.results)
            setInfo(data.info)

        } catch (error) {
            console.error(error)
            setError(error)
            setCharacters([])
            setInfo({})

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(initialUrl) {
           fetchCharacters(initialUrl)
           
        } else {
            setError(new Error("El env que contiene el enlace a la api no esta definido en las variables"))
            setLoading(false)
        }
    }, [initialUrl])

    const onPrevious = () => {
        if(info.prev){
            fetchCharacters(info.prev)
        }
    }

    const onNext = () => {
        if(info.next){
            fetchCharacters(info.next)
        }
    }

    return {
        characters,
        info,
        loading,
        error,
        onPrevious,
        onNext,
    }
}

export default useRickAndMortyApi;