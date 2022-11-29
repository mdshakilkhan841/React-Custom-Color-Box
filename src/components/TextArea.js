import React, { useState } from "react";
import "./TextArea.css";

const Body = () => {

    const [enteredColor, setColor] = useState ('');
    const valueChangeHandler = (event) => {
        setColor(event.target.value);
    
    };

    const submitHandler = (event) =>{
        //turn off the default page reloading function
        event.preventDefault();
        
        //after pressing Enter button display will be cleared 
        setColor('');
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="input">
                    <input type="text" size="27" placeholder="Type Color Name or Color Code" className="inputTextArea" value={enteredColor} onChange={valueChangeHandler} />
                </div>
            </form>
            <div>
                <textarea className="bodyTextArea" name="textarea" style={{backgroundColor: enteredColor}}></textarea>
            </div>
        </>
    );
};

export default Body;
