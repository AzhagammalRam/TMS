import React from 'react'

function UploadIFHRMSDataForm() {
  return (
      <main className="pt-3">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-12 mb-3">
              <div className="card bg-white">
                <div className="card-header">
                  <h4 className='title-clr'><i className="bi bi-table me-2"></i> Publish Course Report</h4>
                </div>
                <div className="card-body">
                  <div className="col-md-12 row p-3">
                    <div className='col-md-5 row'>
                      <div className='col-md-12'><input type='text' className="form-control" name="search" placeholder='Search by course, training center, location, date'/></div>
                    </div>
                    <div className='col-md-2 row'>
                      <button className='btn btn-danger'><i class="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;
                      Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  
  )
}

export default UploadIFHRMSDataForm