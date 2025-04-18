import React, { useState } from 'react';
import { Button, Col, Table, Row } from 'react-bootstrap';

function ModeOfReceiving() {
  const [modeName, setModeName] = useState('');
  const [modes, setModes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!modeName.trim()) {
      alert('Please enter a mode of receiving name');
      return;
    }
    const newEntry = { name: modeName };
    setModes([...modes, newEntry]);
    setModeName('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(modes[index].name);
  };

  const handleUpdate = (index) => {
    if (!editName.trim()) {
      alert('Mode of receiving name cannot be empty');
      return;
    }
    const updatedList = [...modes];
    updatedList[index].name = editName;
    setModes(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = modes.filter((_, i) => i !== index);
    setModes(updatedList);
  };

  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className="title-clr">
                  <i className="bi bi-table me-2"></i> Add Mode of Receiving
                </h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 mb-3 align-items-center justify-content-center row p-2">
                  <div className="col-md-3">
                    <h6 className="title-clr pt-2">Mode of Receiving Name :</h6>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      value={modeName}
                      onChange={(e) => setModeName(e.target.value)}
                      placeholder="Enter mode of receiving name"
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
                        <th>Mode of Receiving Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modes.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No Modes of Receiving added yet.
                          </td>
                        </tr>
                      ) : (
                        modes.map((mode, index) => (
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
                                mode.name
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

export default ModeOfReceiving;
