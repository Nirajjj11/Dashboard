import React from 'react'
import Dashboard from './Dashboard';
import Employees from './Employees';
import AddEmployees from './AddEmployees';
import EmployeeInfo from './EmployeeInfo';
import UpdateInfo from './UpdateInfo';
import { Routes,Route } from 'react-router-dom';

function RouteSample() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/add" element={<AddEmployees />} />
                <Route path="/employees/:id" element={<EmployeeInfo />} />
                <Route path="/employees/:id/update" element={<UpdateInfo />} />
            </Routes>
        </div>
    )
}

export default RouteSample