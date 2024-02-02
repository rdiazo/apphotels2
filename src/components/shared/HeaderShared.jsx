import { Link } from "react-router-dom"
import './styles/HeaderShared.css'

const HeaderShared = () => {
  return (
    <div>
    <header className="header">
        <h1 className="header__title" ><Link to='/' >Booking<span className="header__span">App</span> </Link></h1>
        <nav>
            <ul>
                <li className="header__li" ><Link to='/reservations' >Reservations</Link></li>
                <li className="header__li" ><Link to='/register' >Register</Link></li>
                <li className="header__li" ><Link to='/login' >Login</Link></li>
            </ul>
        </nav>
    </header>
    <h2 className="header__titlef">Filters</h2>
    </div>
  )
}

export default HeaderShared