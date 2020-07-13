import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type, disabled, className }) => {
    let typeClasses = '';
    switch (type) {
        case 'link':
            typeClasses = 'bg-transparent text-rcti-link';
            break;

        default:
            typeClasses = 'bg-rcti-primary';
            break;
    }
    
    return (
        <button disabled={disabled} onClick={onClick} className={`w-full h-10 ${typeClasses} rounded focus:outline-none tracking-wide disabled:opacity-75 ${className}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'link'])
};

export default Button;