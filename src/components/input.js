import React from 'react';

const Input = props => {
  return (
    <div>
      <input
        type="text"
        className={props.type == 'add' ? 'add' : 'search'}
        placeholder={props.type == 'add' ? 'Add New' : 'Search'}
        onKeyDown={props.handleFn}
        ref={props.setRef}
      />
    </div>
  );
};

export default Input;
