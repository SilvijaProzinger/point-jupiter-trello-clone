import { useState } from 'react'
import './AddCard.scss'

const AddCard = (props) => {
    const [ enteredContent, setEnteredContent ] = useState('')

    const cardContentHandler = (event) => {
        setEnteredContent(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    
        const newCardContent = {
          id: props.cards.length-1 + 1,
          cardContent: enteredContent,
          parentBoardId: props.boardId
        }
    
        props.onSaveCard(newCardContent)
        setEnteredContent('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input className="add__card" type="text" placeholder="Add a card..." value={enteredContent} onChange={cardContentHandler}/>
        </form>
    )
}

export default AddCard