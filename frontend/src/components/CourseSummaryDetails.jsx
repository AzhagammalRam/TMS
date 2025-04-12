import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

function CourseSummaryDetails() {
  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className='title-clr'><i className="bi bi-table me-2"></i> Summary of Course</h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 row p-3">
                <Card>
                  <Card.Body>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Course ID: </h6></div>
                      <div className='col-md-7'><p>Bhopal/CybSec/042025/020</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Course Name: </h6></div>
                      <div className='col-md-7'><p>Cyber Security Course</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Location: </h6></div>
                      <div className='col-md-7'><p>Bhopal</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>From Date: </h6></div>
                      <div className='col-md-7'><p>23/04/2025</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>To Date: </h6></div>
                      <div className='col-md-7'><p>25/04/2025</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Training Center: </h6></div>
                      <div className='col-md-7'><p>Bhopal Training Center</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>No of Seats: </h6></div>
                      <div className='col-md-7'><p>2</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Qualification: </h6></div>
                      <div className='col-md-7'><p>B.E, B.Tech</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Rank: </h6></div>
                      <div className='col-md-7'><p>SI</p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Other Qualification: </h6></div>
                      <div className='col-md-7'><p>Cyber Security Knowledge </p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Units: </h6></div>
                      <div className='col-md-7'><p>All Units </p></div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>Is approval required?: </h6></div>
                      <div className='col-md-7'>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Yes"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="No"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='col-md-12 row'>
                      <div className='col-md-3'><h6 className='txtred'>If yes, from whom?: </h6></div>
                      <div className='col-md-3'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">SI</option>
                          <option value="2">AO</option>
                          <option value="3">SAO</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-12 mt-5'>
                      <Row>
                        <Col dir="rtl" className='txt-align-center'><Button className="btn btn-success mb-2">Publish</Button></Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CourseSummaryDetails