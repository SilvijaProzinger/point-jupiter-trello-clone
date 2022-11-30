import { useState } from 'react'
import Card from './Card.js'
import AddCard from './AddCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Board.scss'

const Board = (props) => {
    const [ cards, setCards ] = useState([
        {
            id: 0,
            content: 'Welcome to Trello!'
        },
        {
            id: 1,
            content: 'This is an example card.'
        },
        {
            id: 2,
            content: 'This is another example card.'
        },
        {
            id: 3,
            content: 'This card has image content.'
        },
        {
            id: 4,
            content: 'This card has text content.'
        }
    ])

    const handleDelete = () => {
        props.deleteBoard(props.boardId)
    }

    return (
        <div className="board__container">
            <div className="board__header">
                <h2 className="board__title">{props.boardTitle}</h2>
                <button className="delete__board" onClick={handleDelete}>
                    <span className="visually-hidden">Delete</span>
                    <FontAwesomeIcon icon={faTrash} className="fa-xs" /> 
                </button>            
            </div>
            <Card />
            <AddCard/>
        </div>
    )
}

export default Board