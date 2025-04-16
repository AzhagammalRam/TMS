import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function CreateCourseForm() {
  return (
      <main className="pt-3">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-12 mb-3">
              <div className="card bg-white">
                <div className="card-header">
                  <h4 className='title-clr'><i className="bi bi-table me-2"></i> Create Course(Outside State)</h4>
                </div>
                <div className="card-body">
                  <div className="col-md-12 row p-3">
                    <div className='col-md-12 bg-gray p-2'><h5 className='txtred'>Course Details</h5></div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Training Center</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">PTA, Bengaluru</option>
                          <option value="2">PTA, Hyderabad</option>
                          <option value="3">PTA, Delhi</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Location</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Bengaluru</option>
                          <option value="2">Hyderabad</option>
                          <option value="3">Delhi</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Course Name</h6></div>
                      <div className='col-md-7'><input type='text' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Online/offline</h6></div>
                      <div className='col-md-7'>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Online"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="Offline"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>No. of Seats</h6></div>
                      <div className='col-md-7'><input type='text' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>From Date</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>To Date</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>No. of Days</h6></div>
                      <div className='col-md-7'><input type='text' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Last Date</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Internal Cut Off Date</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="col-md-12 row p-3">
                    <div className='col-md-12 bg-gray p-2'><h5 className='txtred'>Eligibility</h5></div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Rank</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">PC</option>
                          <option value="2">SI</option>
                          <option value="3">ADSP</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Qualification</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">BE</option>
                          <option value="2">MBA</option>
                          <option value="3">BSc</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Any Other</h6></div>
                      <div className='col-md-7'><Form.Control as="textarea" rows={2} /></div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="col-md-12 row p-3">
                    <div className='col-md-12 bg-gray p-2'><h5 className='txtred'>Other Details</h5></div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Mode of Receiving</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Letter</option>
                          <option value="2">Mail</option>
                          <option value="3">Fax</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>From</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Dated</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Received on</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Dress Code</h6></div>
                      <div className='col-md-7'><Form.Control as="textarea" rows={2} /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Comments</h6></div>
                      <div className='col-md-7'><Form.Control as="textarea" rows={2} /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Document Name</h6></div>
                      <div className='col-md-7'><input type='text' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Document Type</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Nomination Call Letter</option>
                          <option value="2">HoPF Letter</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Reference Number</h6></div>
                      <div className='col-md-7'><input type='text' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Upload Comminication</h6></div>
                      <div className='col-md-7'><Form.Control type="file" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Publish To</h6></div>
                      <div className='col-md-7'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">All DPO</option>
                          <option value="2">All CPO</option>
                          <option value="3">Spl Unit</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                  <Row>
                    <Col dir="rtl" className='txt-align-center'><Button className="btn btn-success mb-2"><a   href='CourseSummary' className='text-white'>Publish</a></Button></Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default CreateCourseForm