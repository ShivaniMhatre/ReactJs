import React from 'react';

function MyComponentWithWrapper({ name }) {
    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
            {name}
        </div>
    )
}

function Wrapper() {
    return <MyComponentWithWrapper name="Shivani" />;
}
export default Wrapper;

