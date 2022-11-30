import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   return (
      <div className="header__container">
        <div className="header__inner">
            <div className="header__inner--left">
                <button className="header__boards__button">
                    <span>Boards</span>
                </button>
                <input className="header__search" type="text"></input>
                <button type="submit" className="header__search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span className="visually-hidden">Search</span>
                </button>
            </div>
            <h1 className="header__logo">Trello</h1>
            <div className="header__inner--right">
                <button className="header__add__button">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="visually-hidden">Add</span>
                </button>
                <a className="header__user" href="#">
                    <FontAwesomeIcon icon={faUser} />
                   <span>Firstname Lastname</span>
                </a>
                <button className="header__notifications">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="visually-hidden">Notifications</span>
                </button>
            </div>
        </div>
      </div>
   )
}

export default Header