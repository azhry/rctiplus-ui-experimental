import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ChevronDownIcon from '~/assets/images/icons/chevron-down.svg';

const Dropdown = ({ options, onChange }) => {
    const keys = Object.keys(options);
    const [displayContent, toggleContent] = useState(false);
    const [value, setValue] = useState(options[keys[0]]);

    const changeValue = value => {
        toggleContent(false);
        setValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={'dropdown'}>
            <div className={'dropbtn'} onClick={() => toggleContent(!displayContent)}>
                <div className="mx-4">{options[value]}</div>
                <img width="10" height="10" alt="Chevron Down Icon" src={ChevronDownIcon}/>
            </div>
            <div className={displayContent ? 'dropdown-content-display' : 'dropdown-content'}>
                {keys.map((key, i) => (
                    <div className="border-b border-default" key={i} onClick={() => changeValue(key)}>{options[key]}</div>
                ))}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.object,
    onChange: PropTypes.func
};

export default Dropdown;