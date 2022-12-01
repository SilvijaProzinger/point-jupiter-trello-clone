import { useState } from "react"
import './Boards.scss'
import Board from "./Board"
import AddBoard from './AddBoard'

const Boards = () => {
    const [boards, setBoards] = useState([
        {
            id: 0,
            boardTitle: 'Basics'
        },
        {
            id: 1,
            boardTitle: 'Intermediate'
        },
        {
            id: 2,
            boardTitle: 'Advanced'
        }
    ])

    const boardsIds = boards.map((board) => {
        return board.id
    })

    const [ cards, setCards ] = useState([
        {
            id: 0,
            cardContent: 'This is a card.',
            parentBoardId: boards[0].id
        },
        {
            id: 1,
            cardContent: 'This card has a short content that can be edited.',
            parentBoardId: boards[1].id
        },
        {
            id: 2,
            cardContent: 'This is some card content.',
            parentBoardId: boards[2].id
        },
        {
            id: 3,
            cardContent: 'This is an example card.',
            parentBoardId: boards[2].id
        },
    ])

    const cardsIds = cards.map((card) => {
        return card.id
    })

    const addNewBoard = (newBoardData) => {
        const newBoard = {
            ...newBoardData
        }
        setBoards(current => [...current, newBoard])
        console.log(boards)
    }

    const deleteBoard = (boardToDelete) => {
        setBoards(boards.filter(board => board.id !== boardToDelete))
    }

    
    const addNewCard = (newCardContent) => {
        const newCard = {
            ...newCardContent
        }
        setCards(current => [...current, newCard])
        
    }

    const deleteCard = (cardToDelete) => {
        setCards(cards.filter(card => card.id !== cardToDelete))
    }
    
    return (
        <div className="boards">
            {boards.map((board, index) => {
                return (<Board key={index} boardTitle={board.boardTitle} boardId={board.id} deleteBoard={deleteBoard} cards={cards} onSaveCard={addNewCard} deleteCard={deleteCard}/>)
            })}
            <AddBoard onSaveBoard={addNewBoard} boardsIds={boardsIds}/>
        </div>
    )
}

export default Boards