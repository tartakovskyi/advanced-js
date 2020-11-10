import React from 'react';


function Filter(props) {
    return (
        <div className='mb-3'>
        <input
        type="text"
        className='form-control'
        onChange={props.onChange}
        value={props.searchTerm}
        />
        </div>
        );
}

export default Filter;
