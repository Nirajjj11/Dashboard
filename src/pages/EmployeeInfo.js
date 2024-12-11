import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EmployeeInfo() {
  const { id } = useParams();  // Get the employee ID from the URL params
  const [employee, setEmployee] = useState(null);

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
    <div className='content'>
      <h2>{employee.name}</h2>
      <p>Age: {employee.age}</p>
      <p>Sex: {employee.sex}</p>
      <p>Address: {employee.address}</p>
      <p>Email: {employee.email}</p>
      <p>Job Role: {employee.jobRole}</p>
      <p>Days Present: {employee.daysPresent}</p>
      <p>Joining Date: {employee.joiningDate}</p>
    </div>
  );
}

export default EmployeeInfo;
