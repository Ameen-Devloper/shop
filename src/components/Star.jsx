import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";


const Star = ({ stars }) => {
    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <IoStar /> : stars >= number ? <IoStarHalf /> : <IoStarOutline />
                }
            </span>
        )
    })
    return (
        <div className='text-yellow-500 flex'>{rating}</div>
    )
}

export default Star
