import React, { useState } from 'react'

const FilterOptions = ({ setStatus, setSpecies, setGender }) => {

    return (
        <>
            <form className='d-flex justify-content-center gap-4 mb-4'>
                <select className='border ' onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Selecione o status</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Morto</option>
                    <option value="unknown">Desconhecido</option>
                    <option value="">Todos</option>
                </select>
                <select onChange={(e) => setSpecies(e.target.value)}>
                    <option value="">Selecione a espécie</option>
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
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="">Selecione o genero</option>
                    <option value="male">Macho</option>
                    <option value="female">Fêmea</option>
                    <option value="unknown">Desconhecido</option>
                    <option value="">Todos</option>
                </select>
            </form>

        </>

    )
}

export default FilterOptions