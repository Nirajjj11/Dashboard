import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://localhost:3001/employees');
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className='content'>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              {employee.name} - {employee.jobRole}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
