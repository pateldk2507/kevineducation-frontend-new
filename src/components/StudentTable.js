import React, { useState, useMemo, useRef } from 'react'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
  CInputGroup,
  CFormInput,
  CPagination,
  CPaginationItem
} from '@coreui/react'
import { CSVLink } from 'react-csv'
import { useReactToPrint } from 'react-to-print'
import { Cursor } from 'react-bootstrap-icons'

export default function StudentTable({ data }) {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  const printRef = useRef(null)

  /* =======================
     SEARCH
  ======================= */
  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.values(item).join(' ').toLowerCase().includes(search.toLowerCase())
    )
  }, [search, data])

  /* =======================
     PAGINATION
  ======================= */
  const indexOfLast = currentPage * rowsPerPage
  const indexOfFirst = indexOfLast - rowsPerPage
  const currentRows = filteredData.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  const getPageNumbers = () => {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  return pages
}


  /* =======================
     PRINT (✅ FIXED)
  ======================= */
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Students List',
  })

  return (
    <div className="card p-3 shadow-sm">

      {/* Controls */}
      <div className="d-flex flex-wrap justify-content-between mb-3 gap-2">
        <CInputGroup style={{ maxWidth: 300 }}>
          <CFormInput
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
          />
        </CInputGroup>

        <div className="d-flex gap-2">
          <CSVLink
            data={filteredData}
            filename="students.csv"
            className="btn btn-success"
          >
            Export CSV
          </CSVLink>

          <CButton color="primary" onClick={handlePrint}>
            Print
          </CButton>
        </div>
      </div>

      {/* Printable Area */}
      <div ref={printRef} className="table-responsive">
        <CTable striped hover responsive>
          <CTableHead>
            
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Age</CTableHeaderCell>
              <CTableHeaderCell>Grade</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {currentRows.map((row, i) => (
              <CTableRow key={i}>
                <CTableDataCell>{row.id}</CTableDataCell>
                <CTableDataCell>{row.name}</CTableDataCell>
                <CTableDataCell>{row.age}</CTableDataCell>
                <CTableDataCell>{row.grade}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>

      </div>

      {/* Pagination */}
     <CPagination align="center" className="mt-3">

  {/* Previous */}
  <CPaginationItem
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(p => p - 1)}
    style={{ cursor: 'pointer' }}
  >
    Previous
  </CPaginationItem>

  {/* Page Numbers */}
  {getPageNumbers().map((page) => (
    <CPaginationItem
      key={page}
      active={page === currentPage}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </CPaginationItem>
  ))}

  {/* Next */}
  <CPaginationItem
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(p => p + 1)}
    style={{ cursor: 'pointer' }}
  >
    Next
  </CPaginationItem>

</CPagination>

    </div>
  )
}
