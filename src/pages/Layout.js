import React, { useMemo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Pages.css';

function Layout(props) {
    // Use useMemo to compute the styles dynamically
    const myStyle = useMemo(() => {
        return props.mode === 'light'
            ? { color: 'black', backgroundColor: '#d8d3f8   ' }
            : { color: 'white', backgroundColor: '#322d49  ' };
    }, [props.mode]);

    const employeeId = 1;  // Replace with dynamic ID or prop

    return (
        <>
            <div className={`sidebar ${props.mode === 'dark' ? 'dark' : 'light'}`} style={myStyle}>
                <nav>
                    <h2 className='App mx-5 my-5' style={myStyle}>Layout</h2>
                    <ul className="fs-4 mx-4 sidebar-list" style={myStyle}>
                        <li style={myStyle}>
                            <Link className="sidebar-link" to='/' style={myStyle}>Dashboard</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to='/employees' style={myStyle}>Employees</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to={`/employees/${employeeId}`} style={myStyle}>
                                
                            </Link>
                        </li>

                        <li>
                            <Link className="sidebar-link" to='/employees/add' style={myStyle}>
                                Add Employee
                            </Link>
                        </li>

                        <li>
                            <Link className="sidebar-link" to={`/employees/${employeeId}/edit`} style={myStyle}>
                                Update Employee
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div >

            <div className={`content ${props.mode === 'dark' ? 'dark' : ''}`}>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
