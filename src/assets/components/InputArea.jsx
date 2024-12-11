import React, { useEffect, useState } from 'react'
import { Button } from './Button'

export const InputArea = () => {

    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    // const [items, setItems] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setTodoList(items);
        }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(todoList));
    //     console.log(todoList);
    // }, [items])

    const textChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "") return;
        const addText = [...todoList, text]
        setTodoList(addText);
        localStorage.setItem('items', JSON.stringify(addText));
        setText("");
    }

    const clickEvent = (e, index) => {
        const event = e.target.nextElementSibling.children[0];

        if (event.checked) {
            const delArray = [...todoList];
            delArray.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(delArray));
            setTodoList(delArray);
            // localStorage.setItem('items', JSON.stringify(todoList));
            // e.target.parentElement.remove();
        } else {
            return;
        }
    }

    const resetBtn = () => {
        setTodoList([]);
        localStorage.clear();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={textChange} id="input" autoComplete="off" placeholder='長文禁止！' maxLength={16} />
                <div style={{ marginTop: "30px" }}>
                    <Button click={resetBtn} margin="0 10px" color="white" bgColor="red" type="button" >Reset</Button>
                    <Button color="white" bgColor="#5383c3" type="submit" >Add</Button>
                </div>
            </form>

            <ol id='todo'>
                {todoList.map((list, index) => (
                    <li key={list + index}>
                        <span className="listText" onClick={(e) => clickEvent(e, index)} >{list}</span>
                        <span className='check'><input type="checkbox" /></span>
                    </li>
                ))}
            </ol>
        </>
    )
}
