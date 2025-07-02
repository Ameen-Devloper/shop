import React from 'react'

const Star = ({ stars }) => {
    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5
        return (
            stars >= index + 1 ? "f" : stars >= number ? "h" : "n"
        )
    })
    return (
        <div>{rating}</div>
    )
}

export default Star