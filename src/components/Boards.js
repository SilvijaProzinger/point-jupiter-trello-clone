import { useState } from "react"
import './Boards.scss'
import Board from "./Board"
import AddBoard from './AddBoard'

const Boards = () => {
    const [boards, setBoards] = useState([
        {
            id: Math.random().toString(),
            boardTitle: 'Basics'
        },
        {
            id: Math.random().toString(),
            boardTitle: 'Intermediate'
        },
        {
            id: Math.random().toString(),
            boardTitle: 'Advanced'
        }
    ])

    const addNewBoard = (newBoardData) => {
        const newBoard = {
            ...newBoardData
        }
        setBoards(current => [...current, newBoard])
    }

    const deleteBoard = (boardToDelete) => {
        setBoards(boards.filter(board => board.id !== boardToDelete))
        console.log(boards)
    }
    
    return (
        <div className="boards">
            {boards.map((board) => {
                return (<Board key={board.id} boardTitle={board.boardTitle} boardId={board.id} deleteBoard={deleteBoard}/>)
            })}
            <AddBoard onSaveBoard={addNewBoard}/>
        </div>
    )
}

export default Boards