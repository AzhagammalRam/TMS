import React from 'react'
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaPlus, FaPlusSquare, FaTrash, FaUpload } from 'react-icons/fa';

function DataBankCRUDGrid() {
  const columns = [
    { field: "id", headerName: "S.No", width: 70 },
    { field: "firstName", headerName: "First Name", width: 180 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "cpfGdf", headerName: "CPF / GDF No", width: 150 },
    { field: "rank", headerName: "Rank", width: 120 },
    { field: "qualification", headerName: "Qual", width: 150 },
    { field: "whatsapp", headerName: "WhatsApp No.", width: 180 },
    { field: "email", headerName: "Email ID", width: 180 },
    { field: "fromDate", headerName: "From Date", width: 180 },
    { field: "toDate", headerName: "To Date", width: 180 },
    { field: "courses", headerName: "Courses", width: 180 },
    { field: "withinState", headerName: "Within State", width: 120 },
    { field: "outsideState", headerName: "Outside State", width: 180 },
    { field: "dob", headerName: "DOB", width: 120 },
    { field: "doj", headerName: "DOJ", width: 120 },
    {
      field: "action",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div>
          {params.value?.btn1 && (
            <Button variant="contained" color="primary" onClick={() => handleAction(params.row, "Publish")}>
              <a href='/CreateCourse' className='text-white'><FaPlus /></a>
            </Button>
          )}&nbsp;
          {params.value?.btn2 && (
            <Button variant="contained" color="secondary" onClick={() => handleAction(params.row, "Publish")}>
              <a href='/CreateCourse' className='text-white'><FaEdit /></a>
            </Button>
          )}&nbsp;
          {params.value?.btn3 && (
            <Button variant="contained" color="error" onClick={() => handleAction(params.row, "Publish")}>
              <a href='/CreateCourse' className='text-white'><FaTrash /></a>
            </Button>
          )}
        </div>
      ),
    },
  ];

  const GridData = [
    {
      id: 1,
      firstName: 'Sujatha',
      lastName: 'Rao',
      cpfGdf: 'CPF123456',
      rank: 'Inspector',
      qualification: 'M.Sc. Safety',
      whatsapp: "9876543210",
      email: "sujatha@example.com",
      fromDate: "2024-04-01",
      toDate: "2024-04-05",
      courses: 5,
      withinState: "Yes",
      outsideState: "No",
      dob: "1985-06-15",
      doj: "2010-01-01",
      action: { btn1: "add",btn2: "edit",btn3: "delete" },
    },
    {
      id: 2,
      firstName: 'Rithika',
      lastName: 'Sharma',
      cpfGdf: 'CPF654321',
      rank: 'SI',
      qualification: 'B.A. Sociology',
      whatsapp: "9876543222",
      email: "rithika@example.com",
      fromDate: "2024-04-06",
      toDate: "2024-04-10",
      courses: 5,
      withinState: "No",
      outsideState: "Yes",
      dob: "1990-09-20",
      doj: "2012-03-15",
      action: { btn1: "add",btn2: "edit",btn3: "delete" },
    },
    {
      id: 3,
      firstName: 'Rajesh',
      lastName: 'Kumar',
      cpfGdf: 'CPF789123',
      rank: 'Head Constable',
      qualification: 'B.Com',
      whatsapp: "9876543244",
      email: "rajesh.kumar@example.com",
      fromDate: "2025-02-01",
      toDate: "2025-02-05",
      courses: 5,
      withinState: "Yes",
      outsideState: "No",
      dob: "1985-07-12",
      doj: "2010-06-01",
      action: { btn1: "add",btn2: "edit",btn3: "delete" },
    },
  ];

  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className='title-clr'><i className="bi bi-table me-2"></i> Add / Edit / Delete Profile</h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 row p-3">
                  <div className='col-md-2 ms-2 row '>
                    <button className='btn btn-info text-white'><FaUpload />&nbsp;&nbsp;
                      Upload Excel</button>
                  </div>
                </div>
                <div className="table-responsive p-3">
                  <DataGrid
                    rows={GridData}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 10,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DataBankCRUDGrid
