import { useState } from "react";
import styles from "./Search.module.scss"

const Search = ({ setPageNumber, setSearch, search }) => {
  const [name, setName] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name);
    setPageNumber(1);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} container d-flex justify-content-center pb-4`}>
      <label>
        <input value={name} onChange={handleChange} placeholder="Digite o nome do personagem" type="text" className={`rounded-start-pill ${styles.input}`} />
      </label>
      <button className={`${styles.btn} btn  btn-primary rounded-end-pill fs-5`} type="submit">Buscar</button>
    </form>
  )
}

export default Search