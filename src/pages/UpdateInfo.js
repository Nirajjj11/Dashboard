import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function UpdateInfo(props) {
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

  const myStyle = useMemo(() => {
    return props.mode === 'light'
      ? { color: 'black', backgroundColor: '#d8d3f8   ' }
      : { color: 'white', backgroundColor: '#322d49  ' };
  }, [props.mode]);

  return (
    <div className="content container-mine">
      <h2 className="text-center">Update Employee</h2>
      <form onSubmit={handleSubmit} className={`bg-${myStyle} p-4 rounded shadow-sm`}>
        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            name="id"
            value={employeeId}
            onChange={handleIdChange}
            className="form-control"
            placeholder="Enter Employee ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={employeeData.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Age"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sex" className="form-label">Sex:</label>
          <input
            type="text"
            id="sex"
            name="sex"
            value={employeeData.sex}
            onChange={handleChange}
            className="form-control"
            placeholder="Sex"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={employeeData.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Address"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jobRole" className="form-label">Job Role:</label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={employeeData.jobRole}
            onChange={handleChange}
            className="form-control"
            placeholder="Job Role"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="daysPresent" className="form-label">Days Present:</label>
          <input
            type="number"
            id="daysPresent"
            name="daysPresent"
            value={employeeData.daysPresent}
            onChange={handleChange}
            className="form-control"
            placeholder="Days Present"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="joiningDate" className="form-label">Joining Date:</label>
          <input
            type="date"
            id="joiningDate"
            name="joiningDate"
            value={employeeData.joiningDate}
            onChange={handleChange}
            className="form-control"
            placeholder="Joining Date"
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Update Employee</button>
          <button type="button" onClick={handleDelete} className="btn btn-danger">Delete Employee</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateInfo;








// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function UpdateInfo() {
//   const navigate = useNavigate();  // For redirecting after update or delete

//   const [employeeData, setEmployeeData] = useState({
//     id: '',
//     name: '',
//     age: '',
//     sex: '',
//     address: '',
//     email: '',
//     jobRole: '',
//     daysPresent: '',
//     joiningDate: '',
//   });

//   const [employeeId, setEmployeeId] = useState('');  // Track the employee ID

//   // Fetch employee data when ID is entered
//   useEffect(() => {
//     if (employeeId) {
//       const fetchEmployee = async () => {
//         try {
//           const response = await fetch(`http://localhost:3001/employees/${employeeId}`);
//           if (response.ok) {
//             const data = await response.json();
//             setEmployeeData(data);
//           } else {
//             alert('Employee not found');
//             setEmployeeData({});  // Clear data if not found
//           }
//         } catch (error) {
//           console.error('Error fetching employee details:', error);
//         }
//       };

//       fetchEmployee();
//     }
//   }, [employeeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeData({
//       ...employeeData,
//       [name]: value,
//     });
//   };

//   const handleIdChange = (e) => {
//     const { value } = e.target;
//     setEmployeeId(value);  // Update employee ID
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:3001/employees/${employeeId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employeeData),
//       });

//       if (response.ok) {
//         alert('Employee updated successfully');
//         navigate(`/employees/${employeeId}`); // Redirect to employee details page after update
//       } else {
//         alert('Failed to update employee');
//       }
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/employees/${employeeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Employee deleted successfully');
//         navigate('/employees');  // Redirect to employee list after deletion
//       } else {
//         alert('Failed to delete employee');
//       }
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div className="content">
//       <h2>Update Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Employee ID:</label>
//           <input
//             type="text"
//             name="id"
//             value={employeeId}
//             onChange={handleIdChange}
//             placeholder="Enter Employee ID"
//             required
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={employeeData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             value={employeeData.age}
//             onChange={handleChange}
//             placeholder="Age"
//             required
//           />
//         </div>
//         <div>
//           <label>Sex:</label>
//           <input
//             type="text"
//             name="sex"
//             value={employeeData.sex}
//             onChange={handleChange}
//             placeholder="Sex"
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={employeeData.address}
//             onChange={handleChange}
//             placeholder="Address"
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={employeeData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Job Role:</label>
//           <input
//             type="text"
//             name="jobRole"
//             value={employeeData.jobRole}
//             onChange={handleChange}
//             placeholder="Job Role"
//             required
//           />
//         </div>
//         <div>
//           <label>Days Present:</label>
//           <input
//             type="number"
//             name="daysPresent"
//             value={employeeData.daysPresent}
//             onChange={handleChange}
//             placeholder="Days Present"
//             required
//           />
//         </div>
//         <div>
//           <label>Joining Date:</label>
//           <input
//             type="date"
//             name="joiningDate"
//             value={employeeData.joiningDate}
//             onChange={handleChange}
//             placeholder="Joining Date"
//             required
//           />
//         </div>
//         <button type="submit">Update Employee</button>
//       </form>

//       <button onClick={handleDelete} style={{ marginTop: '20px' }}>
//         Delete Employee
//       </button>
//     </div>
//   );
// }

// export default UpdateInfo;
