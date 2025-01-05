import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ selectedCharacter, open, setOpen }) => {
  if (open) {
    return (
      <div className={styles.background}>
        <div className={`${styles.modal}`}>

          <img className='img-fluid w-100 h-100 rounded-top-2' src={selectedCharacter.image} alt="Imagem do personagem" />
          <div className='content ps-4'>
            <h2 className='pt-4 pb-4 fw-bolder'>{selectedCharacter.name}</h2>
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
            <p><strong>Última localização:</strong> {selectedCharacter.location.name}</p></div>


          <button className='w-100 btn btn-success rounded-top-0 btn-lg' onClick={() => setOpen(!open)}>Fechar</button>
        </div>
      </div>
    )
  }
}

export default Modal