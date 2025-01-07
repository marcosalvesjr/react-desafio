import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ info, setPageNumber }) => {
  return (
    <ReactPaginate className='pagination justify-content-center gap-2 my-2'
      pageCount={info.pages}
      nextClassName={styles.next}
      nextLabel="Próximo"
      previousLabel="Anterior"
      previousClassName={styles.prev}
      pageClassName='page-item'
      pageLinkClassName='btn btn-outline-success'
      onPageChange={(data) => { setPageNumber(data.selected + 1) }}
      activeClassName='active'
      nextLinkClassName='btn btn-outline-success'
      previousLinkClassName='btn btn-outline-success'
    />
  )
}

export default Pagination