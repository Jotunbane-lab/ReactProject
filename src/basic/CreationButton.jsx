import React from "react";

export function CreationButton(props) {
    const [text, setText] = React.useState("");

    function addTask() {
        props.onCreate({
            done: false,
            text: text
        });
    }

    return <div>

        <input placeholder="enter task" value={text} onChange={(event => setText(event.currentTarget.value))}/>
        <button onClick={addTask} disabled={text===""}>add</button>


    </div>
}