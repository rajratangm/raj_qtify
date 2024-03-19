function Searchbar(){
    return <>
        <div class="search-container">
        <form action="/search" method="get">
            <input type="text" name="q" class="search-box" placeholder="Search...">
            <button type="submit" class="search-button">Search</button>
        </form>
    </div>
    
    
    </>
}

export default Searchbar