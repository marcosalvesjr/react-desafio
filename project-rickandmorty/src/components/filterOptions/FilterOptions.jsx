import React, { useState } from 'react'

const FilterOptions = ({ setStatus }) => {
    const status = ["alive", "dead", "unknown"];
    const species = ["human", "alien",]

    return (
        <select onChange={(e) => setStatus(e.target.value)}>
            {status.map((st) => (<option value={st} key={st.id}>{st}</option>))}
        </select>
    )
}

export default FilterOptions