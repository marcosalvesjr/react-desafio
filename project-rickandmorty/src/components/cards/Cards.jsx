import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({ characters, error }) => {

  if (characters && characters.length > 0) {
    return (<div className='container'>
      <div className='row'>

        {characters.map((character) => (
          <div className='col-4 position-relative mb-3' key={character.id}>
            <div className={styles.cards}>
              <img className={`${styles.img} img-fluid`} src={character.image} alt="Imagem dos personagens" />
              <div className='content' style={{ padding: "10px" }}>
                <div className='fs-4 fw-bold mb-4'>{character.name}</div>
                <div className='fs-6'>Última localização</div>
                <div className='fs-5'>{character.location.name}</div>
              </div>
            </div>
            {(() => {
              if (character.status === "Dead") {
                return (<div className={`${styles.badge} badge text-bg-danger position-absolute`}>{character.status}</div>)
              } else if (character.status === "Alive") {
                return (<div className={`${styles.badge} badge text-bg-success position-absolute`}>{character.status}</div>)
              } else {
                return (
                  <div className={`${styles.badge} badge text-bg-secondary position-absolute`}>{character.status}</div>)
              }
            })()}
          </div>))}
      </div>


    </div>
    )
  } else
    return (
      <div>
        <p>{error}</p>
      </div>
    )





}

export default Cards