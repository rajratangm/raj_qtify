import React from 'react'

function Searchbar(){
    return         <div className="wrap">
    <div className="search">
        <input type="text" className="searchTerm" placeholder="What are you looking for?" />
        <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
        </button>
    </div>
</div>
}

export default Searchbar