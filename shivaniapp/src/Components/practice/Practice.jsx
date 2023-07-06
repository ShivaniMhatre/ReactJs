
import React, { useRef, useState } from 'react'
import './../practice/Practice.css'


const Practice = () => {
    const dropdownref = useRef(null);
    const[isActive,setISActive]=useState(false);

    const onClick =()=>setISActive(!isActive)
    return (
        <div className='menu-container'>
            <button onClick={onClick} className='menu-trigger'>
                <span>User</span>
                <img src="" alt="Shivani" />
            </button>
            <nav ref={dropdownref} className={`menu${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li>Message</li>
                    <li>Trips</li>
                    <li>Saved</li>
                </ul>
            </nav>
        </div>
    )
}

export default Practice