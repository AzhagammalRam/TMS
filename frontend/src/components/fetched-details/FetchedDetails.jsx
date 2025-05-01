import React, { useEffect, useState } from 'react';

function FetchedDetails() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  // Simulate fetching data
  useEffect(() => {
    const fetchedData = [
      { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
      { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
      { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
    ];
    setData(fetchedData);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left panel - 20% */}
      <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '1rem' }}>
        <h3 className="text-secondary">Fetched List</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelected(item)}
              style={{
                borderBottom: '1px solid #ccc',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: selected?.id === item.id ? '#e0f7fa' : 'transparent',
                fontWeight: selected?.id === item.id ? 'bold' : 'normal',
                borderLeft: selected?.id === item.id ? '4px solid #007BFF' : '4px solid transparent',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right panel - 80% */}
      <div style={{ width: '80%', padding: '1rem' }}>
        {selected ? (
          <div>
            <h2 className="text-secondary">Details for {selected.name}</h2>
            <p><strong>Age:</strong> {selected.age}</p>
            <p><strong>Email:</strong> {selected.email}</p>
          </div>
        ) : (
          <p>Please select a name to view details.</p>
        )}
      </div>
    </div>
  );
}

export default FetchedDetails;
