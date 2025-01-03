import React from 'react'

const Modal = ({ selectedCharacter, open }) => {
  if (open) {
    return (
      <div>
        <div>
          <h2>{selectedCharacter.name}</h2>
          <p><strong>Status:</strong> {selectedCharacter.status}</p>
          <p><strong>Espécie:</strong> {selectedCharacter.species}</p>
          <p><strong>Gênero:</strong> {selectedCharacter.gender}</p>
          <p><strong>Última localização:</strong> {selectedCharacter.location.name}</p>

        </div>
      </div>
    )
  }
}

export default Modal