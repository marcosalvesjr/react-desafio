import React, { useEffect, useState } from 'react'

export const useFetchResults = () => {
    const urlBase = "https://rickandmortyapi.com/api/character";
    //const query = "?page={}&status={}&gender={}&species"
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch(urlBase)
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} - ${res.statusText}`);
                }
                const json = await res.json();
                setCharacters(json.results);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchCharacters();
    }, [])

    //console.log(characters);
    return { characters }
}