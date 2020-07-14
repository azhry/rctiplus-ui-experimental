import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
    rightAddon, 
    rightAddonClasses,
    label, 
    onChange, 
    name, 
    placeholder, 
    type, 
    className, 
    rounded, 
    style, 
    value,
    theme
}) => {
    let rightAddonClass = '';
    if (rightAddon) {
        rightAddonClass = 'border-r-0 rounded-r-none';
        className += ' custom-input-with-addon';
    }

    let rightRoundedClass = '';
    if (rounded) {
        rightRoundedClass = 'rounded-r-' + rounded;
    }
    else {
        rightRoundedClass = 'rounded-r';
    }

    let themeClasses = 'border rounded px-3';
    switch (theme) {
        case 'material':
            themeClasses = 'border-b';
            break;
    }

    return (
        <div className="my-2">
            <label className="text-sm font-semibold" htmlFor={`id-${name}`}>{label}</label>
            <div className="flex items-center mt-2">
                <input onChange={onChange} value={value} className={`w-full h-10 bg-transparent border-solid border-rcti-default placeholder-rcti-default focus:outline-none text-sm ${rightAddonClass} ${className} ${themeClasses}`} name={name} id={`id-${name}`} placeholder={placeholder} type={type} style={style}/>
                {rightAddon ? (
                    <button className={`flex-shrink-0 border border-solid border-rcti-default border-l-0 h-10 px-3 focus:none focus:outline-none ${rightRoundedClass} ${rightAddonClasses}`} type="button" aria-label="Right Addon" style={style}>
                        {rightAddon}
                    </button>
                ) : null}
            </div>
        </div>
    );
};

Input.propTypes = {
    rightAddon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    rightAddonClasses: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    rounded: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'material'])
};

export default Input;