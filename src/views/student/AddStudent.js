import { useState, useRef } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormCheck,
  CCol,
  CAlert,
  CProgress,
  CFormSelect,
  CToast,
  CToastBody,
  CToaster,
} from '@coreui/react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './StudentWizard.css' // For animations

export default function AddStudent() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const nodeRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    emergencyContacts: [{ name: '', phone: '', relation: '' }],
    education: [{ schoolName: '', grade: '', year: '' }],
    createLogin: true,
    username: '',
    tempPassword: '',
  })

  /* ---------------- VALIDATION ---------------- */
  const validateStep = () => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name required'
      if (!formData.lastName) newErrors.lastName = 'Last name required'
      if (!formData.dob) newErrors.dob = 'Date of birth required'
      if (!formData.gender) newErrors.gender = 'Select gender'
    }

    if (step === 2) {
      if (!formData.email.match(/^\S+@\S+\.\S+$/))
        newErrors.email = 'Valid email required'
      if (!formData.phone.match(/^\d{10}$/))
        newErrors.phone = '10 digit phone required'
    }

    if (step === 3) {
      formData.emergencyContacts.forEach((c, i) => {
        if (!c.name) newErrors[`ec_name_${i}`] = 'Required'
        if (!c.phone.match(/^\d{10}$/))
          newErrors[`ec_phone_${i}`] = '10 digit phone'
        if (!c.relation) newErrors[`ec_relation_${i}`] = 'Required'
      })
    }

    if (step === 4) {
      formData.education.forEach((e, i) => {
        if (!e.schoolName) newErrors[`ed_school_${i}`] = 'Required'
        if (!e.grade) newErrors[`ed_grade_${i}`] = 'Required'
        if (!e.year) newErrors[`ed_year_${i}`] = 'Required'
      })

      if (formData.createLogin) {
        if (!formData.username) newErrors.username = 'Username required'
        if (!formData.tempPassword || formData.tempPassword.length < 6)
          newErrors.tempPassword = 'Min 6 chars'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleArrayChange = (e, index, section) => {
    const updated = [...formData[section]]
    updated[index][e.target.name] = e.target.value
    setFormData({ ...formData, [section]: updated })
  }

  const addRow = (section, template) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], template],
    })
  }

  const removeRow = (section, index) => {
    const updated = [...formData[section]]
    updated.splice(index, 1)
    setFormData({ ...formData, [section]: updated })
  }

  const nextStep = () => {
    validateStep()
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const submitForm = () => {
    if (validateStep()) {
      setSubmittedData(formData)
      setStep(6)
      setShowToast(true)
    }
  }

  /* ---------------- UI ---------------- */

  return (
    <>
      <CCard>
        <CCardHeader>
          <strong>Create Student</strong>
        </CCardHeader>

        <CCardBody>
          <CProgress value={(step / 6) * 100} className="mb-4" />

          <TransitionGroup>
            <CSSTransition key={step} timeout={300} classNames="fade-slide" nodeRef={nodeRef}>
              <div ref={nodeRef}>
                {/* STEP 1: PERSONAL */}
                {step === 1 && (
                  <>
                    <h5>Personal Details</h5>
                    <CRow>
                      <CCol md={6}>
                        <CFormLabel>First Name</CFormLabel>
                        <CFormInput
                          name="firstName"
                          onChange={handleChange}
                          value={formData.firstName}
                        />
                        {errors.firstName && (
                          <CAlert color="danger">{errors.firstName}</CAlert>
                        )}
                      </CCol>
                      <CCol md={6}>
                        <CFormLabel>Last Name</CFormLabel>
                        <CFormInput
                          name="lastName"
                          onChange={handleChange}
                          value={formData.lastName}
                        />
                        {errors.lastName && (
                          <CAlert color="danger">{errors.lastName}</CAlert>
                        )}
                      </CCol>
                    </CRow>

                    <CRow className="mt-3">
                      <CCol md={6}>
                        <CFormLabel>DOB</CFormLabel>
                        <CFormInput
                          type="date"
                          name="dob"
                          onChange={handleChange}
                          value={formData.dob}
                        />
                        {errors.dob && (
                          <CAlert color="danger">{errors.dob}</CAlert>
                        )}
                      </CCol>
                      <CCol md={6}>
                        <CFormLabel>Gender</CFormLabel>
                        <CFormSelect
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </CFormSelect>
                        {errors.gender && (
                          <CAlert color="danger">{errors.gender}</CAlert>
                        )}
                      </CCol>
                    </CRow>
                  </>
                )}

                {/* STEP 2: CONTACT */}
                {step === 2 && (
                  <>
                    <h5>Contact Details</h5>
                    <CFormInput
                      className="mb-3"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <CAlert color="danger">{errors.email}</CAlert>
                    )}
                    <CFormInput
                      className="mb-3"
                      name="phone"
                      placeholder="Phone (10 digits)"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <CAlert color="danger">{errors.phone}</CAlert>
                    )}
                    <CFormInput
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </>
                )}

                {/* STEP 3: EMERGENCY */}
                {step === 3 && (
                  <>
                    <h5 className="d-flex justify-content-between align-items-center">
                      Emergency Contacts
                      <CButton
                        color="primary"
                        size="sm"
                        onClick={() =>
                          addRow('emergencyContacts', {
                            name: '',
                            phone: '',
                            relation: '',
                          })
                        }
                      >
                        + Add Contact
                      </CButton>
                    </h5>

                    {formData.emergencyContacts.map((c, i) => (
                      <CSSTransition
                        key={i}
                        timeout={300}
                        classNames="fade-slide"
                      >
                        <CRow className="mb-2 align-items-center">
                          <CCol md={3} className='mb-3'>
                            <CFormInput
                              name="name"
                              placeholder="Name"
                              value={c.name}
                              onChange={(e) =>
                                handleArrayChange(e, i, 'emergencyContacts')
                              }
                            />
                            {errors[`ec_name_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ec_name_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3} className='mb-3'>
                            <CFormInput
                              name="phone"
                              placeholder="Phone"
                              value={c.phone}
                              onChange={(e) =>
                                handleArrayChange(e, i, 'emergencyContacts')
                              }
                            />
                            {errors[`ec_phone_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ec_phone_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3} className='mb-3'>
                            <CFormInput
                              name="relation"
                              placeholder="Relation"
                              value={c.relation}
                              onChange={(e) =>
                                handleArrayChange(e, i, 'emergencyContacts')
                              }
                            />
                            {errors[`ec_relation_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ec_relation_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3} className='mb-3'>
                            <CButton
                              color="danger"
                              onClick={() => removeRow('emergencyContacts', i)}
                            >
                              Remove
                            </CButton>
                          </CCol>
                        </CRow>
                      </CSSTransition>
                    ))}
                  </>
                )}

                {/* STEP 4: EDUCATION */}
                {step === 4 && (
                  <>
                    <h5 className="d-flex justify-content-between align-items-center">
                      Education
                      <CButton
                        color="primary"
                        size="sm"
                        onClick={() =>
                          addRow('education', { schoolName: '', grade: '', year: '' })
                        }
                      >
                        + Add Education
                      </CButton>
                    </h5>

                    {formData.education.map((e, i) => (
                      <CSSTransition
                        key={i}
                        timeout={300}
                        classNames="fade-slide"
                      >
                        <CRow className="mb-2 align-items-center">
                          <CCol md={3}>
                            <CFormInput
                              name="schoolName"
                              placeholder="School"
                              value={e.schoolName}
                              onChange={(x) =>
                                handleArrayChange(x, i, 'education')
                              }
                            />
                            {errors[`ed_school_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ed_school_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3}>
                            <CFormInput
                              name="grade"
                              placeholder="Grade"
                              value={e.grade}
                              onChange={(x) =>
                                handleArrayChange(x, i, 'education')
                              }
                            />
                            {errors[`ed_grade_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ed_grade_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3}>
                            <CFormInput
                              name="year"
                              placeholder="Year"
                              value={e.year}
                              onChange={(x) =>
                                handleArrayChange(x, i, 'education')
                              }
                            />
                            {errors[`ed_year_${i}`] && (
                              <CAlert color="danger">
                                {errors[`ed_year_${i}`]}
                              </CAlert>
                            )}
                          </CCol>
                          <CCol md={3}>
                            <CButton
                              color="danger"
                              onClick={() => removeRow('education', i)}
                            >
                              Remove
                            </CButton>
                          </CCol>
                        </CRow>
                      </CSSTransition>
                    ))}

                    <CFormCheck
                      className="mt-3"
                      label="Create login for student"
                      checked={formData.createLogin}
                      name="createLogin"
                      onChange={handleChange}
                    />

                    {formData.createLogin && (
                      <CRow className="mt-2">
                        <CCol md={6}>
                          <CFormInput
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                          {errors.username && (
                            <CAlert color="danger">{errors.username}</CAlert>
                          )}
                        </CCol>
                        <CCol md={6}>
                          <CFormInput
                            name="tempPassword"
                            placeholder="Temp Password"
                            value={formData.tempPassword}
                            onChange={handleChange}
                          />
                          {errors.tempPassword && (
                            <CAlert color="danger">{errors.tempPassword}</CAlert>
                          )}
                        </CCol>
                      </CRow>
                    )}
                  </>
                )}

                {/* STEP 5: SUMMARY */}
                {step === 5 && (
                  <>
                    <h5>Review & Confirm</h5>

                    <h6>Personal Details</h6>
                    <p>Name: {formData.firstName} {formData.lastName}</p>
                    <p>DOB: {formData.dob}</p>
                    <p>Gender: {formData.gender}</p>

                    <h6>Contact Details</h6>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Address: {formData.address}</p>

                    <h6>Emergency Contacts</h6>
                    {formData.emergencyContacts.map((c, i) => (
                      <p key={i}>{c.name} ({c.relation}): {c.phone}</p>
                    ))}

                    <h6>Education</h6>
                    {formData.education.map((e, i) => (
                      <p key={i}>{e.schoolName}, Grade {e.grade}, Year {e.year}</p>
                    ))}

                    {formData.createLogin && (
                      <>
                        <h6>Login</h6>
                        <p>Username: {formData.username}</p>
                        <p>Temp Password: {formData.tempPassword}</p>
                      </>
                    )}
                  </>
                )}

                {/* STEP 6: FINAL JSON */}
                {step === 6 && (
                  <>
                    <h5>Submitted JSON (Use for DB Insert)</h5>
                    <pre className="bg-dark text-white p-3 rounded">
                      {JSON.stringify(submittedData, null, 2)}
                    </pre>
                  </>
                )}
              </div>
            </CSSTransition>
          </TransitionGroup>

          {/* ACTIONS */}
          <div className="mt-4 d-flex justify-content-between">
            {step > 1 && step < 6 && (
              <CButton color="secondary" onClick={prevStep}>Back</CButton>
            )}

            {step < 5 && (
              <CButton color="primary" onClick={nextStep}>Next</CButton>
            )}

            {step === 5 && (
              <CButton color="success" onClick={submitForm}>Submit</CButton>
            )}
          </div>
        </CCardBody>
      </CCard>

      {/* TOAST SUCCESS */}
      <CToaster>
        {showToast && (
          <CToast autohide={true} visible={showToast} onClose={() => setShowToast(false)}>
            <CToastBody>Student data submitted successfully!</CToastBody>
          </CToast>
        )}
      </CToaster>
    </>
  )
}
