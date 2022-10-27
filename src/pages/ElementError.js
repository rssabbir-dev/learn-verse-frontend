import React from 'react';

const ElementError = () => {
    const handleReloadPage = () => {
        window.location.reload()
    }
    return (
        <div className='flex justify-center items-center h-screen flex-col gap-5'>
            <h1 className='text-6xl font-bold text-primary'>Oops....!</h1>
            <p>Something were wrong, please reload again.</p>
            <button onClick={handleReloadPage} className='btn btn-primary'>Reload Again</button>
        </div>
    );
};

export default ElementError;