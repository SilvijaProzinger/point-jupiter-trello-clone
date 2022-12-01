import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const handleDelete = () => {
        props.deleteCard(props.cardId)
    }

    return (
        <div>
            <div className="card__body">
                <div className="card__content">
                   <p>{props.content}</p>
                </div>
                <button className="delete__card" onClick={handleDelete}>
                    <span className="visually-hidden">Delete</span>
                    <FontAwesomeIcon icon={faPen} className="fa-xs" />
                </button> 
            </div>   
        </div>
    )
}

export default Card