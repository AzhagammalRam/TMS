import React, { useState } from 'react';
import { Button, Col, Table, Row } from 'react-bootstrap';

function TrainingCenterList() {
  const [trainingtype, setTrainingtype] = useState('');
  const [trainingTypes, setTrainingTypes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!trainingtype.trim()) {
      alert('Please enter a training center name');
      return;
    }
    const newEntry = { name: trainingtype };
    setTrainingTypes([...trainingTypes, newEntry]);
    setTrainingtype('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(trainingTypes[index].name);
  };

  const handleUpdate = (index) => {
    if (!editName.trim()) {
      alert('Training center name cannot be empty');
      return;
    }
    const updatedList = [...trainingTypes];
    updatedList[index].name = editName;
    setTrainingTypes(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = trainingTypes.filter((_, i) => i !== index);
    setTrainingTypes(updatedList);
  };

  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className="title-clr">
                  <i className="bi bi-table me-2"></i> Add Training Center
                </h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 mb-3 align-items-center justify-content-center row p-2">
                  <div className="col-md-3">
                    <h6 className="title-clr pt-2">Training Center Name :</h6>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      value={trainingtype}
                      onChange={(e) => setTrainingtype(e.target.value)}
                      placeholder="Enter training center name"
                    />
                  </div>
                </div>
                <Row>
                  <Col dir="rtl" className="txt-align-center">
                    <Button className="btn btn-success mb-2" onClick={handleSave}>
                      Save
                    </Button>
                  </Col>
                </Row>
                <hr />
                <div className="table p-3 mb-3">
                  <Table bordered className="smtbl responsive w-100">
                    <thead>
                      <tr className="text-center">
                        <th>Sl.No</th>
                        <th>Training Center Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainingTypes.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No Training Center added yet.
                          </td>
                        </tr>
                      ) : (
                        trainingTypes.map((type, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              {editIndex === index ? (
                                <input
                                  type="text"
                                  value={editName}
                                  onChange={(e) => setEditName(e.target.value)}
                                  className="form-control w-75"
                                />
                              ) : (
                                type.name
                              )}
                            </td>
                            <td className="text-center">
                              {editIndex === index ? (
                                <Button
                                  variant="success"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handleUpdate(index)}
                                >
                                  Update
                                </Button>
                              ) : (
                                <Button
                                  variant="warning"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handleEdit(index)}
                                >
                                  Edit
                                </Button>
                              )}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TrainingCenterList;
