import React, { useEffect, useState,useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import man from './pics/man.png';

function Employees(props) {
  const [employees, setEmployees] = useState([]);

  // Fetch employees data from the server
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://localhost:3001/employees');
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const myStyle = useMemo(() => {
        return props.mode === 'light'
          ? { color: 'black', backgroundColor: '#d8d3f8   ' }
          : { color: 'white', backgroundColor: '#322d49  ' };
      }, [props.mode]);
  

  return (
    <div className='content'>
      <h2>Employee List</h2>
      {/* Removed scrolling, just showing the employee cards */}
      <div className="container">
        {/* Bootstrap grid to display 3 cards per row */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {employees.map((employee) => (
            <div key={employee.id} className="col">
              <Link to={`/employees/${employee.id}`}>
                <div className={`card h-100"  bg-${myStyle}`}>
                  {/* Avatar image best when we use multer and express */}
                  <img
                    src={man}
                    className="card-img-top"
                    alt="Avatar"
                    style={{ width: "100px", height: "100px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <div className="card-body text-center">
                    {/* Employee name */}
                    <h5 className="card-title">{employee.name}</h5>
                    {/* Employee job role */}
                    <p className="card-text">{employee.jobRole}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employees;


