import { useState } from 'react'
import Card from './Card.js'
import AddCard from './AddCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Board.scss'

const Board = (props) => {
    const handleDelete = () => {
        props.deleteBoard(props.boardId)
    }

    const cardsToDisplay = props.cards.map((card,index) => 
        card.parentBoardId === props.boardId ? <Card key={index} content={card.cardContent} cardId={card.id}  deleteCard={props.deleteCard}/> : null
    )

    return (
        <div className="board__container">
            <div className="board__header">
                <h2 className="board__title">{props.boardTitle}</h2>
                <button className="delete__board" onClick={handleDelete}>
                    <span className="visually-hidden">Delete</span>
                    <FontAwesomeIcon icon={faTrash} className="fa-xs" /> 
                </button>            
            </div>
            {cardsToDisplay}
            <AddCard onSaveCard={props.onSaveCard} cards={props.cards} boardId={props.boardId}/>
        </div>
    )
}

export default Board