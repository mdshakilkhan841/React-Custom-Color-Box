import React, { useState, useEffect } from "react";
import "./TextArea.css";

const Body = () => {

    const [enteredColor, setColor] = useState ('');
    const valueChangeHandler = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <form>
                <div className="input">
                    <input type="text" size="31" placeholder="Type Color Name or Color Code" className="inputTextArea" value={enteredColor} onChange={valueChangeHandler} />
                </div>
            </form>
            <div>
                <textarea className="bodyTextArea" name="textarea" id="" cols="50" rows="20" style={{backgroundColor: enteredColor}}></textarea>
            </div>
        </>
    );
};

export default Body;
