import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../cards/Cards';
import Search from '../search/Search';

const Characters = () => {
    const urlBase = "https://rickandmortyapi.com/api/character";
    const [pageNumber, setPagenumber] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [search, setSearch] = useState("");
    const query = `?page=${pageNumber}&name=${search}&status=${status}&species=${species}`;
    const [characters, setCharacters] = useState([]);
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
                setError(null);
            } catch (err) {
                setError('erro na api');
            }
        }
        fetchCharacters();
    }, [query])
    console.log(error)
    return (
        <>
            <Search setSearch={setSearch} />
            <Cards characters={characters} error={error} />
        </>
    )
}

export default Characters