import { useState, useEffect } from 'react';
import Cards from '../cards/Cards';
import Search from '../search/Search';
import Pagination from '../pagination/Pagination';
import FilterOptions from '../filterOptions/FilterOptions';



const Characters = () => {
    const urlBase = "https://rickandmortyapi.com/api/character";
    const [pageNumber, setPageNumber] = useState(1);
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("");
    const [charactersToShow, setCharactersToShow] = useState();

    const query = `?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            try {
                const res = await fetch(urlBase + query)
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} - ${res.statusText}`);
                }
                const json = await res.json();
                setCharacters(json.results);
                setInfo(json.info);
                setError(null);
            } catch (err) {
                setCharacters([])
                setError('Nenhum personagem encontrado');
            }
            setLoading(false);
        }
        fetchCharacters();
    }, [pageNumber, search, status, species, gender])
    return (
        <>
            <Search setPageNumber={setPageNumber} search={search} setSearch={setSearch} />
            <FilterOptions setPageNumber={setPageNumber} setCharactersToShow={setCharactersToShow} setSearch={setSearch} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} />
            {loading && <p className='text-primary text-center fw-bolder'>Carregando dados...</p>}
            {!loading && <Cards charactersToShow={charactersToShow} characters={characters} error={error} />}

            <Pagination setPageNumber={setPageNumber} info={info} />
        </>
    )
}

export default Characters