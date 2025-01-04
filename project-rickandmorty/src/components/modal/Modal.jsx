import React from 'react'

const Modal = ({ selectedCharacter, open }) => {
  if (open) {
    return (
      <div>
        <div>
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt="" />
          <p><strong>Status:</strong>  {selectedCharacter?.status === 'Alive'
            ? 'Vivo'
            : selectedCharacter?.status === 'Dead'
              ? 'Morto'
              : selectedCharacter?.status === 'unknown'
                ? 'Desconhecido'
                : 'Status inválido'}</p>
          <p><strong>Espécie:</strong> {selectedCharacter?.species === 'Human' ? 'Humano'
            : selectedCharacter?.species === 'Alien' ? 'Alienígena'
              : selectedCharacter?.species === 'Humanoid' ? 'Humanoide'
                : selectedCharacter?.species === 'Poopybutthole' ? 'Poopybutthole'
                  : selectedCharacter?.species === 'Mythological' ? 'Mitologico'
                    : selectedCharacter?.species === 'Unknown' ? 'Desconhecido'
                      : selectedCharacter?.species === 'Animal' ? 'Animal'
                        : selectedCharacter?.species === 'Disease' ? 'Doença'
                          : selectedCharacter?.species === 'Robot' ? 'Robo'
                            : selectedCharacter?.species === 'Cronenberg' ? 'Cronenberg'
                              : selectedCharacter?.species === 'Planet' ? 'Planeta'
                                : 'Status inválido'}</p>
          <p><strong>Gênero:</strong> {selectedCharacter?.gender === 'Male' ? 'Macho'
            : selectedCharacter?.gender === 'Female' ? 'Fêmea'
              : selectedCharacter?.gender === 'Unknown' ? 'Desconhecido'
                : 'Genero inválido'}</p>
          <p><strong>Origem: </strong> {selectedCharacter.origin?.name === 'unknown' ? 'Desconhecido'
            : selectedCharacter.origin.name}</p>
          <p><strong>Última localização:</strong> {selectedCharacter.location.name}</p>

        </div>
      </div>
    )
  }
}

export default Modal