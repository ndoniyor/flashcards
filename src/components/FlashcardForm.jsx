import React, {useState} from "react";

export const FlashcardForm = ({onSubmit}) => {
    const [inputVal,setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(inputVal)
        setInput("")
    }

    return(
        <div className="answer-form">
            <form onSubmit={handleSubmit}>
            <label>Answer: </label>
            <input 
                type="text"
                value={inputVal}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};
