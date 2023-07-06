import React from 'react'

const Button = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    // <h1>
    //     {children}
    // </h1>
    );

    

};

const ChildrenProps = () => {
    return (
        <div>
            <Button>Login</Button>
        </div>
    )
}

export default ChildrenProps