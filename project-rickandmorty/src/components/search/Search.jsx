import React, { useState } from 'react'
import styles from "./Search.module.scss"

const Search = ({ setSearch, search }) => {


  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <form className='d-flex justify-content-center pb-4'>
      <label>
        <input value={search} onChange={handleChange} placeholder="Digite o nome do personagem" type="text" className={styles.input} />
      </label>
    </form>
  )
}

export default Search