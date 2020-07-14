import React from 'react';
import PropTypes from 'prop-types';

import ArrowLeftIcon from '~/assets/images/icons/arrow-left.svg';

const Navigation = ({ title, subtitle, leftIcon, backgroundColor }) => {
    return (
        <div className={`w-full ${backgroundColor} z-10 fixed top-0 flex items-center`} style={{ height: 47 }}>
            <div className="fixed px-5">
                {leftIcon}
            </div>
            <div className="w-full flex justify-center">
                {title}
            </div>
            <div className="fixed right-0 px-5">
                {subtitle}
            </div>
        </div>
    );
};

Navigation.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.any,
    leftIcon: PropTypes.element,
    backgroundColor: PropTypes.string
};

Navigation.defaultProps = {
    leftIcon: <img alt="Back button" src={ArrowLeftIcon}/>,
    backgroundColor: 'bg-rcti-default'
};

export default Navigation;