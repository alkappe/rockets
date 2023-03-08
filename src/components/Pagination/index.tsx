import React, { useState } from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
    margin: 20px auto;
    display: flex;
    width: auto;
    justify-content: center;
`
const PaginationButton = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 5px;
    border: none;
    outline: none;
    background: #fff;
    cursor: pointer;
    color: #000;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Pagination ({ totalPages, setPage }) {
  const [currentPage, setCurrentPage] = useState(false)

  const onPaginationClick = pageIndex => {
    setCurrentPage(pageIndex)
    setPage(pageIndex)
  }

  const arrayPages = []
  // INPUT 4
  // OUTPUT [1, 2, 3, 4]

  for (let i = 1; i < totalPages + 1; i++) {
    arrayPages.push(i)
  }

  return (
        <PaginationWrapper>
            {arrayPages.map(pageIndex => (
                <PaginationButton

                    key={pageIndex}
                    onClick={() => { onPaginationClick(pageIndex) }}
                >
                    {pageIndex}
                </PaginationButton>
            ))}
        </PaginationWrapper>
  )
}
