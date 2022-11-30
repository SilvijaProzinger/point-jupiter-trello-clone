import { useState } from "react"
import './AddBoard.scss'

const AddBoard = (props) => {
    const [ enteredTitle, setEnteredTitle ] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    
        const newBoardData = {
          id: Math.random().toString(),
          boardTitle: enteredTitle
        }
    
        props.onSaveBoard(newBoardData)
        setEnteredTitle('')
    }

    return (
        <form className="add__board" onSubmit={submitHandler}>
            <input type="text" className="add__board__input" placeholder="Add a list..." value={enteredTitle} onChange={titleChangeHandler}></input>
        </form>
    )
}

export default AddBoard