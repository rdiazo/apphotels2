import { useRef } from "react"
import './styles/FilterName.css'

const FilterName = ({ setNameInput }) => {

const inputSearch = useRef()

const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''
}

    return (
    <form className="filtername__form" onSubmit={handleSubmit}>
        <input className="filtername__input"  ref={inputSearch} type="text" placeholder="
hotel name"/>    
        <button className="filtername__search" >Search</button>
    </form>
  )
}

export default FilterName