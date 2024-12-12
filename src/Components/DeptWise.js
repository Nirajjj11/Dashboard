import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeJobRoles = () => {
    const [jobRoleCounts, setJobRoleCounts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from JSON server
        fetch('http://localhost:3001/employees') // Replace with your server URL
            .then((response) => response.json())
            .then((data) => {
                // Count employees by jobRole
                const counts = data.reduce((acc, employee) => {
                    const role = employee.jobRole.toLowerCase(); // Normalize case
                    acc[role] = (acc[role] || 0) + 1;
                    return acc;
                }, {});
                setJobRoleCounts(counts);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='FullCount list-unstyled  '>
            <h3>Employee Job Role Counts</h3>
            <ul>
                {Object.entries(jobRoleCounts).map(([role, count]) => (
                    <li className='fs-3' key={role}>
                        {role.charAt(0).toUpperCase() + role.slice(1)}: {count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeJobRoles;
