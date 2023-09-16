import React from 'react';

const NavBar = ({createOpeningHandler}) => {
    const createJobHandler = (event) => {
        event.preventDefault();
        createOpeningHandler();
    }

    return (
        <>
            <div className="flex justify-between items-center bg-blue-500 px-4 py-2 text-white">
                <button className="bg-white text-blue-500 px-4 py-2 rounded" onClick={createJobHandler}>Create + </button>
            </div>
        </>
            
    )


}

export default NavBar;