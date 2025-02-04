import styles from './FilterOptions.module.scss'
const FilterOptions = ({ setPageNumber, setStatus, setSpecies, setGender, setSearch, setCharactersToShow }) => {

    const handleClickClear = () => {
        setStatus('');
        setSpecies('');
        setGender('');
        setSearch('');
        setCharactersToShow();
        setPageNumber(1);
    }

    return (
        <>
            <div>
                <h1 className='text-center'>Filtros</h1>
                <form className={`d-flex flex-column justify-content-center`}>
                    <label>Status:</label>
                    <select className={`${styles.opt} mb-3`} onChange={(e) => { setStatus(e.target.value); setPageNumber(1); }}>
                        <option defaultValue="placeholder" disabled selected>Selecione o status</option>
                        <option value="alive">Vivo</option>
                        <option value="dead">Morto</option>
                        <option value="unknown">Desconhecido</option>
                        <option value="">Todos</option>
                    </select>
                    <label>Espécie:</label>
                    <select className={`${styles.opt} mb-3`} onChange={(e) => { setSpecies(e.target.value); setPageNumber(1); }}>
                        <option defaultValue="placeholder" disabled selected>Selecione a espécie</option>
                        <option value="Human">Humano</option>
                        <option value="Alien">Alienígena </option>
                        <option value="Humanoid">Humanoide</option>
                        <option value="Poopybutthole">Poopybutthole</option>
                        <option value="Mythological">Mitologico</option>
                        <option value="Unknown">Desconhecido</option>
                        <option value="Animal">Animal</option>
                        <option value="Disease">Doença</option>
                        <option value="Robot">Robo</option>
                        <option value="Cronenberg">Cronenberg</option>
                        <option value="Planet">Planeta</option>
                        <option value="">Todos</option>
                    </select>
                    <label>Gênero:</label>
                    <select className={`${styles.opt} mb-3`} onChange={(e) => { setGender(e.target.value); setPageNumber(1); }}>
                        <option defaultValue="placeholder" disabled selected>Selecione o genero</option>
                        <option value="male">Macho</option>
                        <option value="female">Fêmea</option>
                        <option value="unknown">Desconhecido</option>
                        <option value="">Todos</option>
                    </select>
                    <label>Quantidade de personagens exibidos:</label>
                    <select className={`${styles.opt} mb-3`} onChange={(e) => setCharactersToShow(e.target.value)}>
                        <option defaultValue="" disabled selected>Deseja ver quantos personagens</option>
                        <option value="5">Mostrar: 5 personagens</option>
                        <option value="10">Mostrar: 10 personagens</option>
                        <option value="20">Mostrar: 20 personagens</option>
                    </select>
                </form>
                <p className={`d-flex justify-content-center gap-4 mb-4 ${styles.btn}`} onClick={handleClickClear}>Limpar filtro</p>
            </div>

        </>

    )
}

export default FilterOptions