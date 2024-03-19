import React from 'react'

function Searchbar(){
    return <>
              <div className="search-container">
            <form action="/search" method="get">
                <input type="text" name="q" className="search-box" placeholder="Search..." />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    
    
    </>
}

export default Searchbar