import React from 'react';

const Button = ({ title, activeClass, _callback, type  }) => {
    return (
      <button className={activeClass} onClick={_callback} type={type}>
        {title}
      </button>
    );
  };
  

export default Button