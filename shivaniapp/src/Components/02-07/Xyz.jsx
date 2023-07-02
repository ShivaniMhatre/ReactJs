import React from 'react'
import { useNavigate } from 'react-router-dom'

const Xyz = () => {
    const router = useNavigate()

    function goto() {
        router('/singlepro/12345')
    }
    return (
        <div>
            <button onClick={goto}>Go to Single Pro Page</button>
        </div>
    )
}

export default Xyz