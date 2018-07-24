import React from 'react';

const SearchBar = ({ searchChange }) => {
    return (
        <div>
            <input
                placeholder='Search Player'
                type='search'
                onChange={searchChange}
                className='form-control'
                style={{marginTop: '10px', marginBottom: '10px'}}/>
        </div>
    );
}

export default SearchBar;