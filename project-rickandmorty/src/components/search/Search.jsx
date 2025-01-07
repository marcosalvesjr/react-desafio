import React, { useState } from 'react'
import styles from "./Search.module.scss"

const Search = ({ setPageNumber, setSearch, search }) => {


  const handleChange = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} container d-flex justify-content-center pb-4`}>
      <label>
        <input value={search} onChange={handleChange} placeholder="Digite o nome do personagem" type="text" className={styles.input} />
      </label>
    </form>
  )
}

export default Search