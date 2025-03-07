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
                <div className='rounded-3 p-4 bg-light '>
                    <h1 className='text-center'>Filt<span className='text-primary'>ros</span></h1>
                    <form className={`d-flex flex-column justify-content-center`}>
                        <label className='fs-5 fw-bold'>Status:</label>
                        <select className={`mb-3 form-select`} onChange={(e) => { setStatus(e.target.value); setPageNumber(1); }}>
                            <option defaultValue="placeholder" disabled selected>Selecione o status</option>
                            <option value="alive">Vivo</option>
                            <option value="dead">Morto</option>
                            <option value="unknown">Desconhecido</option>
                            <option value="">Todos</option>
                        </select>
                        <label className='fs-5 fw-bold'>Espécie:</label>
                        <select className={`mb-3 form-select`} onChange={(e) => { setSpecies(e.target.value); setPageNumber(1); }}>
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
                        <label className='fs-5 fw-bold'>Gênero:</label>
                        <select className={`mb-3 form-select`} onChange={(e) => { setGender(e.target.value); setPageNumber(1); }}>
                            <option defaultValue="placeholder" disabled selected>Selecione o genero</option>
                            <option value="male">Macho</option>
                            <option value="female">Fêmea</option>
                            <option value="unknown">Desconhecido</option>
                            <option value="">Todos</option>
                        </select>
                        <label className='fs-5 fw-bold'>Quantidade de personagens exibidos:</label>
                        <select className={`mb-3 form-select `} onChange={(e) => setCharactersToShow(e.target.value)}>
                            <option defaultValue="" disabled selected>Deseja ver quantos personagens</option>
                            <option value="5">Mostrar: 5 personagens</option>
                            <option value="10">Mostrar: 10 personagens</option>
                            <option value="20">Mostrar: 20 personagens</option>
                        </select>
                    </form>
                    <p className={`d-flex justify-content-center gap-4 mb-2 w-100 fw-bold btn btn-primary rounded btn-lg`} onClick={handleClickClear}>Limpar filtro</p>
                </div>
            </div>

        </>

    )
}

export default FilterOptions