import React from 'react'
import StudentTable from '../../components/StudentTable'
import {
  CCard,
  CCardBody, 
  CRow,
  CCol,
  CCardHeader,
} from '@coreui/react'

const ListStudent = () => {
  return (
    <CRow>
      <CCol xs={12}>
        
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Student List</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
             Student list will be displayed here.
            </p>

            <StudentTable data={[
                { id: 1, name: 'John Doe', age: 15, grade: '10th' },
                { id: 2, name: 'Jane Smith', age: 14, grade: '9th' },
                { id: 3, name: 'Sam Johnson', age: 16, grade: '11th' },
                { id: 4, name: 'Emily Davis', age: 15, grade: '10th' },
                { id: 5, name: 'Michael Brown', age: 17, grade: '12th' },
                { id: 6, name: 'Sarah Wilson', age: 14, grade: '9th' },
                { id: 7, name: 'David Lee', age: 16, grade: '11th' },
                { id: 8, name: 'Laura Garcia', age: 15, grade: '10th' },
                { id: 9, name: 'Daniel Martinez', age: 17, grade: '12th' },
                { id: 10, name: 'Sophia Rodriguez', age: 14, grade: '9th' },
            ]} />

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListStudent
