import React from 'react'
import './filter.css'
import { Row ,Form} from 'react-bootstrap'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useNavigate } from 'react-router-dom'
function Filter() {
    const Navigate = useNavigate();


    const handleFetch = () => {
          Navigate('/fetcheddetails')
    }
  return (
    <div className='filter m-5 p-3 '>
        <div className="card-header">
                  <h4 className='title-clr'><FilterAltOutlinedIcon fontSize='large'/> Filter By</h4>
                </div>
        <Row className='mb-2'>
            <div className='col-md-4 row p-2'>
                      <div className='col-md-4'><h6 className='title-clr pt-2'>Sub-Divsion</h6></div>
                      <div className='col-md-8'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Sub-Division 1</option>
                          <option value="2">Sub-Division 2</option>
                          <option value="3">Sub-Division 3</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-3'><h6 className='title-clr pt-2'>Rank</h6></div>
                      <div className='col-md-9'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Rank 1</option>
                          <option value="2">Rank 2</option>
                          <option value="3">Rank 3</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-4'><h6 className='title-clr pt-2'>Qualification</h6></div>
                      <div className='col-md-8'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">Qualification 1</option>
                          <option value="2">Qualification 2</option>
                          <option value="3">Qualification 3</option>
                        </Form.Select>
                      </div>
                    </div>
                    
         </Row>
         <Row className='mb-2'>
         <div className='col-md-4 row p-2'>
                      <div className='col-md-4'><h6 className='title-clr pt-2'>Shortlist</h6></div>
                      <div className='col-md-8'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">option 1</option>
                          <option value="2">option 2</option>
                          <option value="3">option 3</option>
                        </Form.Select>
                      </div>
                    </div>
         <div className='col-md-4 row p-2'>
                      <div className='col-md-3'><h6 className='title-clr pt-2'>On-OD</h6></div>
                      <div className='col-md-9'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">option 1</option>
                          <option value="2">option 2</option>
                          <option value="3">option 3</option>
                        </Form.Select>
                      </div>
                    </div>
                   
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-4'><h6 className='title-clr pt-2'>undecided</h6></div>
                      <div className='col-md-8'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">option 1</option>
                          <option value="2">option 2</option>
                          <option value="3">option 3</option>
                        </Form.Select>
                      </div>
                    </div>
                    </Row>
                    <Row className='mb-2'>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-4'><h6 className='title-clr pt-2'>On-Leave</h6></div>
                      <div className='col-md-8'>
                        <Form.Select className="form-control" aria-label="Default select example">
                          <option>- Select - </option>
                          <option value="1">option 1</option>
                          <option value="2">option 2</option>
                          <option value="3">option 3</option>
                        </Form.Select>
                      </div>
                    </div>
      
                   
                  
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Date of joining</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-4 row p-2'>
                      <div className='col-md-5'><h6 className='title-clr pt-2'>Date of Retirement</h6></div>
                      <div className='col-md-7'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    </Row>
                    <Row className='w-100 d-flex justify-content-center'>
                               <button className='btn btn-light w-25' onClick={handleFetch}>Fetch Data</button>
                    </Row>
    </div>
  )
}

export default Filter