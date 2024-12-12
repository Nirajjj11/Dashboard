import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={props.mode} >
                <div className="container-fluid">
                <Link className="sidebar-link" to='/'><h1><HomeIcon color="dark" fontSize="largest" /></h1></Link>
                    <h2 className='container'>Admin Dashboard Project</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className={`form-check form-switch mx-2  `} style={{ color: props.mode === 'light' ? 'dark' : '#e7e2ff ', backgroundColor: props.mode === 'light' ? 'dark' : 'light' }}>
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input> */}
                            
                            <Button className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">{props.icons}</Button>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar