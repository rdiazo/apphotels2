import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import  './styles/FilterCities.css'

const FilterCities = ({ setIdCity }) => {

    const url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])

    // console.log(cities)

    const handleFilterCities = (id) => {
        setIdCity(id)
    }

    return (
        <div className="filtercities" >
            <h3 className="filtercities__title" >Cities</h3>
            <ul className="filtercities__ul" >
                <li className="filtercities__li" onClick={() => handleFilterCities('all cities')} >All cities</li>
                {
                    cities?.map(city => (
                        <li className="filtercities__li" onClick={() => handleFilterCities(city.id)} key={city.id}     >{city.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterCities