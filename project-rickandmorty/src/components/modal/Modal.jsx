import styles from './Modal.module.scss'

const Modal = ({ selectedCharacter, open, setOpen }) => {

  const speciesMap = {
    Human: 'Humano',
    Alien: 'Alienígena',
    Humanoid: 'Humanoide',
    Poopybutthole: 'Poopybutthole',
    Mythological: 'Mitológico',
    Unknown: 'Desconhecido',
    Animal: 'Animal',
    Disease: 'Doença',
    Robot: 'Robô',
    Cronenberg: 'Cronenberg',
    Planet: 'Planeta',
  };

  const statusMap = {
    Alive: 'Vivo',
    Dead: 'Morto',
    unknown: 'Desconhecido',
  };

  const genderMap = {
    Male: 'Macho',
    Female: 'Fêmea',
    unknown: 'Desconhecido',
  };


  if (open) {
    return (
      <div onClick={() => setOpen(!open)} className={styles.background}>
        <div className={`${styles.modal}`}>

          <img className='img-fluid w-100 h-100 rounded-top-2' src={selectedCharacter.image} alt="Imagem do personagem" />
          <div className='content ps-4'>
            <h2 className='pt-4 pb-2 fw-bolder'>{selectedCharacter.name}</h2>
            <p><strong>Status:</strong>  {statusMap[selectedCharacter?.status] || 'Status inválido.'}</p>
            <p><strong>Espécie:</strong> {speciesMap[selectedCharacter?.species] || 'Espécie inválida.'}</p>
            <p><strong>Gênero:</strong> {genderMap[selectedCharacter?.gender]}</p>
            <p><strong>Origem: </strong> {selectedCharacter.origin?.name === 'unknown' ? 'Desconhecido'
              : selectedCharacter.origin.name}</p>
            <p><strong>Última localização:</strong> {selectedCharacter.location.name}</p></div>


          <button className='w-100 btn btn-primary rounded-top-0 btn-lg' onClick={() => setOpen(!open)}>Fechar</button>
        </div>
      </div>
    )
  }
}

export default Modal