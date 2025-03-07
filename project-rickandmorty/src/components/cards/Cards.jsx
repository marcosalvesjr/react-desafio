import styles from "./Cards.module.scss"
import { useState } from 'react';
import Modal from '../modal/Modal';


const Cards = ({ characters, error, charactersToShow }) => {
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);



  if (characters && characters.length > 0) {
    return (
      <div className={`container rounded-3 p-5 bg-light `}>
        <div className='row'>
          {characters.slice(0, charactersToShow).map((character) => (
            <div className='col-lg-4 col-md-6 position-relative mb-3' key={character.id}>
              <div className={styles.cards}>
                <a href={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`} target='_blank'>
                  <img className={`img-fluid w-100 h-100`} src={character.image} alt="Imagem dos personagens" />
                </a>
                <div className='content'>
                  <div className='fs-4 fw-bold mb-2 text-center pt-2'>{character.name}</div>
                  <div className='fs-6'>Última localização</div>
                  <div className='fs-5 pb-2'>{character.location.name}</div>
                </div>
                <button onClick={() => { setOpen(!open); setSelectedCharacter(character) }} className='w-100 btn btn-primary rounded-top-0 btn-lg'>Saiba mais</button>

              </div>

              {(() => {
                if (character.status === "Dead") {
                  return (<div className={`${styles.badge} badge text-bg-danger position-absolute`}>Morto</div>)
                } else if (character.status === "Alive") {
                  return (<div className={`${styles.badge} badge text-bg-success position-absolute`}>Vivo</div>)
                } else {
                  return (
                    <div className={`${styles.badge} badge text-bg-secondary position-absolute`}>Desconhecido</div>

                  )
                }
              })()}
            </div>))}
        </div>
        <Modal selectedCharacter={selectedCharacter} open={open} setOpen={setOpen} />
      </div>

    )

  } else
    return (
      <div className='alert alert-danger d-flex flex-column justify-content-center align-items-center pb-2'>
        <p className='fw-bolder'>{error}</p>
        <p>Clique em limpar filtro</p>
      </div>
    )





}

export default Cards