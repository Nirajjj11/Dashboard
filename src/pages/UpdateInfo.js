import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateInfo() {
  const navigate = useNavigate();  // For redirecting after update or delete

  const [employeeData, setEmployeeData] = useState({
    id: '',
    name: '',
    age: '',
    sex: '',
    address: '',
    email: '',
    jobRole: '',
    daysPresent: '',
    joiningDate: '',
  });

  const [employeeId, setEmployeeId] = useState('');  // Track the employee ID

  // Fetch employee data when ID is entered
  useEffect(() => {
    if (employeeId) {
      const fetchEmployee = async () => {
        try {
          const response = await fetch(`http://localhost:3001/employees/${employeeId}`);
          if (response.ok) {
            const data = await response.json();
            setEmployeeData(data);
          } else {
            alert('Employee not found');
            setEmployeeData({});  // Clear data if not found
          }
        } catch (error) {
          console.error('Error fetching employee details:', error);
        }
      };

      fetchEmployee();
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleIdChange = (e) => {
    const { value } = e.target;
    setEmployeeId(value);  // Update employee ID
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/employees/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        alert('Employee updated successfully');
        navigate(`/employees/${employeeId}`); // Redirect to employee details page after update
      } else {
        alert('Failed to update employee');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/employees/${employeeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Employee deleted successfully');
        navigate('/employees');  // Redirect to employee list after deletion
      } else {
        alert('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="content">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="id"
            value={employeeId}
            onChange={handleIdChange}
            placeholder="Enter Employee ID"
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={employeeData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
        </div>
        <div>
          <label>Sex:</label>
          <input
            type="text"
            name="sex"
            value={employeeData.sex}
            onChange={handleChange}
            placeholder="Sex"
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={employeeData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Job Role:</label>
          <input
            type="text"
            name="jobRole"
            value={employeeData.jobRole}
            onChange={handleChange}
            placeholder="Job Role"
            required
          />
        </div>
        <div>
          <label>Days Present:</label>
          <input
            type="number"
            name="daysPresent"
            value={employeeData.daysPresent}
            onChange={handleChange}
            placeholder="Days Present"
            required
          />
        </div>
        <div>
          <label>Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={employeeData.joiningDate}
            onChange={handleChange}
            placeholder="Joining Date"
            required
          />
        </div>
        <button type="submit">Update Employee</button>
      </form>

      <button onClick={handleDelete} style={{ marginTop: '20px' }}>
        Delete Employee
      </button>
    </div>
  );
}

export default UpdateInfo;
