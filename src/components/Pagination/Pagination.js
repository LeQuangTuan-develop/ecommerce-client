import { useState } from "react"

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  const jump = (page) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage))
  }

  const reset = () => {
    setCurrentPage(1)
  }

  return { next, prev, jump, currentData, reset, currentPage, maxPage }
}

export default usePagination
