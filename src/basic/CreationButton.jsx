import React from "react";

export function CreationButton(props) {
    const [text, setText] = React.useState("");
    const [date, setDate] = React.useState(0);

    function addTask() {
        props.onCreate({
            done: false,
            text: text,
            date: date
        })
        setText("");
    }

    return <div>

        <input placeholder="enter task" value={text} onChange={(event => setText(event.currentTarget.value))}/>
        <input type={"date"} value={date} onChange={(event => setDate(event.currentTarget.value))}/>
        <button onClick={addTask} disabled={text===""}>add</button>


    </div>
}