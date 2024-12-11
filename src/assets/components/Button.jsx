import React from 'react'

export const Button = ({ type, margin, color, bgColor, click, children }) => {

    const btnStyles = {
        backgroundColor: bgColor,
        color,
        margin,
    }

    return (
        <button style={btnStyles} type={type} onClick={click} >{children}</button>
    )
}
