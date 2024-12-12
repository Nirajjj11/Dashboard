import React, { useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddEmployee(props) {
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

  const myStyle = useMemo(() => {
      return props.mode === 'light'
        ? { color: 'black', backgroundColor: '#d8d3f8   ' }
        : { color: 'white', backgroundColor: '#322d49  ' };
    }, [props.mode]);

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
      id: String(Date.now()),
      ...employeeData,
    };

    try {
      // POST request to the JSON server
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
    <div className={`bg-${myStyle} content container-mine`}  >
      <h2 className="text-center ">Add New Employee</h2>
      <form onSubmit={handleSubmit} className={`bg-${myStyle} p-4 rounded shadow-sm`} >
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"jkndskjsss
            className="form-control container d-flex" 
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control container d-flex" 
            name="age"
            value={employeeData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sex:</label>
          <input
            type="text"
            className="form-control container d-flex" 
            name="sex"
            value={employeeData.sex}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input
            type="text"
            className="form-control container d-flex" 
            name="address"
            value={employeeData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control container d-flex" 
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Role:</label>
          <input
            type="text"
            className="form-control container d-flex" 
            name="jobRole"
            value={employeeData.jobRole}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Days Present:</label>
          <input
            type="number"
            className="form-control container d-flex" 
            name="daysPresent"
            value={employeeData.daysPresent}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Joining Date:</label>
          <input
            type="date"
            className="form-control container d-flex" 
            name="joiningDate"
            value={employeeData.joiningDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;


