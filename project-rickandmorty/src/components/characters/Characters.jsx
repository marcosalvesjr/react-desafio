import { useState, useEffect } from 'react';
import Cards from '../cards/Cards';
import Search from '../search/Search';
import Pagination from '../pagination/Pagination';
import FilterOptions from '../filterOptions/FilterOptions';
import { useSearchParams } from 'react-router-dom';



const Characters = () => {


    const urlBase = "https://rickandmortyapi.com/api/character";
    const [searchParams, setSearchParams] = useSearchParams();

    const [pageNumber, setPageNumber] = useState(Number(searchParams.get('page')) || 1);
    const [status, setStatus] = useState(searchParams.get('status') || "");
    const [species, setSpecies] = useState(searchParams.get('species') || "");
    const [search, setSearch] = useState(searchParams.get('search') || "");
    const [gender, setGender] = useState(searchParams.get('gender') || "");
    const [charactersToShow, setCharactersToShow] = useState(Number(searchParams.get('characterstoshow')) || 20);

    const query = `?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        setPageNumber(Number(searchParams.get('page')) || 1);
        setStatus(searchParams.get('status') || '');
        setSpecies(searchParams.get('species') || '');
        setSearch(searchParams.get('name') || '');
        setGender(searchParams.get('gender') || '');
    }, [searchParams]);

    useEffect(() => {
        setSearchParams({
            page: `${pageNumber}`,
            name: `${search}`,
            status: `${status}`,
            species: `${species}`,
            gender: `${gender}`,
            characterstoshow: `${charactersToShow}`
        })
    }, [pageNumber, search, status, species, gender])


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