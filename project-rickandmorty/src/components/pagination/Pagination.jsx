import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, setPageNumber }) => {
  return (
    <ReactPaginate className='pagination justify-content-center gap-2 my-2'
      pageCount={info.pages}
      nextClassName='btn btn-outline-success'
      nextLabel="Próximo"
      previousLabel="Anterior"
      previousClassName='btn btn-outline-success'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      onPageChange={(data) => { setPageNumber(data.selected) }}
    />
  )
}

export default Pagination