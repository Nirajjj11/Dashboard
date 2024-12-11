import React, { useMemo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Pages.css';

function Layout(props) {
    // Use useMemo to compute the styles dynamically
    const myStyle = useMemo(() => {
        return props.mode === 'light'
            ? { color: 'black', backgroundColor: 'white' }
            : { color: 'white', backgroundColor: 'black' };
    }, [props.mode]);

    return (
        <>
            <div className={`sidebar ${props.mode === 'dark' ? 'dark' : ''}`} style={myStyle}>
                <nav>
                    <h2 className='App mx-5' style={myStyle}>Layout</h2>
                    <ul className="fs-4 mx-4 sidebar-list" style={myStyle}>
                        <li style={myStyle}>
                            <Link className="sidebar-link" to='/' style={myStyle}>Dashboard</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to='/employees' style={myStyle}>Employees</Link>
                            <ul style={myStyle}>
                                <li>
                                    <Link className="sidebar-link" to='/add' style={myStyle}>Add Employees</Link>
                                </li>
                                <li>
                                    <Link className="sidebar-link" to='/:id' style={myStyle}>Info</Link>
                                </li>
                                <li>
                                    <Link className="sidebar-link" to='/:id/update' style={myStyle}>Update Id</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`content ${props.mode === 'dark' ? 'dark' : ''}`}>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
