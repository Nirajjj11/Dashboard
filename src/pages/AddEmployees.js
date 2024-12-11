import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    age: '',
    sex: '',
    address: '',
    email: '',
    jobRole: '',
    daysPresent: 0,
    joiningDate: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the employee object
    const newEmployee = {
      id: Date.now(),  
      ...employeeData,
    };

    try {
      //  POST request to the JSON server
      const response = await fetch('http://localhost:3001/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        console.log('Employee added successfully');
        // Redirect to the employee list page or another page
        navigate('/employees');
      } else {
        console.error('Error adding employee');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='content'>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={employeeData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Sex:</label>
          <input
            type="text"
            name="sex"
            value={employeeData.sex}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={employeeData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Job Role:</label>
          <input
            type="text"
            name="jobRole"
            value={employeeData.jobRole}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Days Present:</label>
          <input
            type="number"
            name="daysPresent"
            value={employeeData.daysPresent}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={employeeData.joiningDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
