import React, { useRef } from 'react';

function MyComponent() {
    const myRef = useRef(null);

    return (
        <div ref={myRef}>
            {/* Your component content */}
            <h1>Hello, World!</h1>
        </div>
    );
}

export default MyComponent;
