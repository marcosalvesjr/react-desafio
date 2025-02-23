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
    <form onSubmit={handleSubmit} className={`p-3 d-flex justify-content-center align-items-center`}>
      <label>
        <input value={name} onChange={handleChange} placeholder="Digite o nome do personagem" type="text" className={`rounded-start-pill ${styles.input}`} />
      </label>
      <button className={`btn btn-primary rounded-end-pill p-2 fs-5 ${styles.btn}`} type="submit">Buscar</button>
    </form>
  )
}

export default Search