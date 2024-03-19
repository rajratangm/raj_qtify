import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'
import styles from './Search.modulec.css'
function Search(){

    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return (

        <form className={styles.wrapper}>
        <input className={styles.search} required/>
        <button className={styles.searchButton}>
            
        </button>
    </form>
    )
    
}

export default Search