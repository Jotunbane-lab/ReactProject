import React from "react";

export function Button(props) {

    function handleButtonClick() {
        props.onChange(props.task)
    }

    return <span>
        <button onClick={handleButtonClick}>{props.task.done ? "UNDONE" : "DONE"}</button>
    </span>
}