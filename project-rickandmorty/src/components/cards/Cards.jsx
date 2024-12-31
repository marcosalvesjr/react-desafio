import React from 'react'

const Cards = ({ characters }) => {

  if (!characters || characters.length === 0) {
    return <div>Personagem inesistente</div>
  }
  return (

    <div>
      <ul>
        {characters.map((character) => (<li key={character.id}>{character.name}</li>))}
      </ul>

    </div>



  )
}

export default Cards