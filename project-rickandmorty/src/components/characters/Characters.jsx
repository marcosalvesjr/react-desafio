import { useState, useEffect } from 'react';
import Cards from '../cards/Cards';
import Search from '../search/Search';
import Pagination from '../pagination/Pagination';
import FilterOptions from '../filterOptions/FilterOptions';
import { useSearchParams } from 'react-router-dom';




const Characters = () => {


    const urlBase = "https://rickandmortyapi.com/api/character";
    const [searchParams, setSearchParams] = useSearchParams();
    const getParam = (param, defaultValue = "") => searchParams.get(param) || defaultValue;
    const getNumberParam = (param, defaultValue = 1) => Number(searchParams.get(param)) || defaultValue;


    const [pageNumber, setPageNumber] = useState(getNumberParam('page') || 1);
    const [status, setStatus] = useState(getParam('status') || "");
    const [species, setSpecies] = useState(getParam('species') || "");
    const [search, setSearch] = useState(getParam('search') || "");
    const [gender, setGender] = useState(getParam('gender') || "");
    const [charactersToShow, setCharactersToShow] = useState(getNumberParam('characterstoshow') || 20);

    const query = `?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        setPageNumber(getNumberParam('page'));
        setStatus(getParam('status'));
        setSpecies(getParam('species'));
        setSearch(getParam('name'));
        setGender(getParam('gender'));
        setCharactersToShow(getNumberParam('characterstoshow', 20));
    }, [searchParams]);

    useEffect(() => {
        setSearchParams({
            page: pageNumber,
            name: search,
            status: status,
            species: species,
            gender: gender,
            characterstoshow: charactersToShow
        })
    }, [pageNumber, search, status, species, gender, charactersToShow])


    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${urlBase}?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`)
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
            <div className='container d-flex flex-row'>
                <FilterOptions setSearchParams={setSearchParams} setPageNumber={setPageNumber} setCharactersToShow={setCharactersToShow} setSearch={setSearch} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} />
                {loading && <p className='text-primary text-center fw-bolder'>Carregando dados...</p>}
                {!loading && <Cards charactersToShow={charactersToShow} characters={characters} error={error} />}
            </div>

            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} />
        </>
    )
}

export default Characters