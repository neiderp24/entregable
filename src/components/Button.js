import React from 'react';
const Button = ({changeQuote, color}) => {
    return (
        <div className='button-container'>
            <button onClick={changeQuote} style={{background:color}} ><i className="fa-solid fa-angle-right" ></i></button>
        </div>
    );
};
export default Button;