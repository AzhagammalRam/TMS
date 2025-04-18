import React, { useState } from 'react';
import { Button, Col, Table, Row } from 'react-bootstrap';

function Locations() {
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!locationName.trim()) {
      alert('Please enter a location name');
      return;
    }
    const newEntry = { name: locationName };
    setLocations([...locations, newEntry]);
    setLocationName('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(locations[index].name);
  };

  const handleUpdate = (index) => {
    if (!editName.trim()) {
      alert('Location name cannot be empty');
      return;
    }
    const updatedList = [...locations];
    updatedList[index].name = editName;
    setLocations(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = locations.filter((_, i) => i !== index);
    setLocations(updatedList);
  };

  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className="title-clr">
                  <i className="bi bi-table me-2"></i> Add Location
                </h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 mb-3 align-items-center justify-content-center row p-2">
                  <div className="col-md-3">
                    <h6 className="title-clr pt-2">Location Name :</h6>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      value={locationName}
                      onChange={(e) => setLocationName(e.target.value)}
                      placeholder="Enter location name"
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
                        <th>Location Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locations.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No Locations added yet.
                          </td>
                        </tr>
                      ) : (
                        locations.map((loc, index) => (
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
                                loc.name
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

export default Locations;
