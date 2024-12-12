import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeInfo(props) {
  const { id } = useParams();  // Get the employee ID from the URL params
  const [employee, setEmployee] = useState(null);

  const myStyle = useMemo(() => {
    return props.mode === 'light'
      ? { color: 'black', backgroundColor: '#d8d3f8   ' }
      : { color: 'white', backgroundColor: '#322d49  ' };
  }, [props.mode]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3001/employees/${id}`);
        if (response.ok) {
          const data = await response.json();
          setEmployee(data);
        } else {
          console.error('Employee not found');
        }
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content containermine" style={{ myStyle }}>
      <div className="card">
        <div className="card-header text-center">
          <h2>{employee.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Employee ID :</strong> {employee.id}</p>
              <p><strong>Age:</strong> {employee.age}</p>
              <p><strong>Sex:</strong> {employee.sex}</p>
              <p><strong>Address:</strong> {employee.address}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Job Role:</strong> {employee.jobRole}</p>
              <p><strong>Days Present:</strong> {employee.daysPresent}</p>
              <p><strong>Joining Date:</strong> {employee.joiningDate}</p>
            </div>
          </div>
        </div>
        <Link className="sidebar-link" to={`/employees/${employee.id}/edit`} >
          <button className="btn btn-primary">Update Employee</button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeInfo;

