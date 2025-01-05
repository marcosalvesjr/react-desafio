import React from 'react'
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
    

    useEffect(() => {
        const fetchCharacters = async () => {
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
        }
        fetchCharacters();
    }, [pageNumber, search, status, species, gender])
    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <FilterOptions setCharactersToShow={setCharactersToShow} setSearch={setSearch} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} />
            <Cards charactersToShow={charactersToShow} characters={characters} error={error} />
            <Pagination setPageNumber={setPageNumber} info={info} />
        </>
    )
}

export default Characters