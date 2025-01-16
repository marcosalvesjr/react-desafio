import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ info, setPageNumber }) => {
  return (
    <ReactPaginate className='pagination justify-content-center gap-2 my-2'
      pageCount={info.pages}
      nextClassName={`page-link ${styles.next}`}
      nextLabel="Próximo"
      previousLabel="Anterior"
      previousClassName={`page-link ${styles.prev}`}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      onPageChange={(data) => { setPageNumber(data.selected + 1) }}
      activeClassName='active'
    />
  )
}

export default Pagination