import React, { useState } from 'react'
import styles from './FilterOptions.module.scss'
const FilterOptions = ({ setStatus, setSpecies, setGender }) => {
    const handleClick = () => {
        setStatus('');
        setSpecies('');
        setGender('');
    }
    return (
        <>
            <form className='d-flex justify-content-center gap-4 mb-4'>
                <select className={styles.opt} onChange={(e) => setStatus(e.target.value)}>
                    <option value="" disabled selected>Selecione o status</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Morto</option>
                    <option value="unknown">Desconhecido</option>
                    <option value="">Todos</option>
                </select>
                <select className={styles.opt} onChange={(e) => setSpecies(e.target.value)}>
                    <option value="" disabled selected>Selecione a espécie</option>
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
                <select className={styles.opt} onChange={(e) => setGender(e.target.value)}>
                    <option value="" disabled selected>Selecione o genero</option>
                    <option value="male">Macho</option>
                    <option value="female">Fêmea</option>
                    <option value="unknown">Desconhecido</option>
                    <option value="">Todos</option>
                </select>

            </form>
            <p className={`d-flex justify-content-center gap-4 mb-4 ${styles.btn}`} onClick={handleClick}>Limpar filtro</p>


        </>

    )
}

export default FilterOptions