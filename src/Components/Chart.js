// not working in my system other wise 

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const EmployeeDaysPresentGraph = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch('http://localhost:3001/employees')
            .then((response) => response.json())
            .then((data) => {
                // Group and sum daysPresent by jobRole
                const groupedData = data.reduce((acc, employee) => {
                    const role = employee.jobRole.toLowerCase(); // Normalize case
                    const daysPresent = parseInt(employee.daysPresent, 10) || 0; // Handle numbers as strings
                    acc[role] = (acc[role] || 0) + daysPresent;
                    return acc;
                }, {});

                // Convert grouped data into an array for the graph
                const formattedData = Object.entries(groupedData).map(([role, totalDays]) => ({
                    jobRole: role.charAt(0).toUpperCase() + role.slice(1), // Capitalize first letter
                    totalDays,
                }));

                setChartData(formattedData);
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
        <div>
            <h1>Days Present by Job Role</h1>
            <BarChart
                width={600}
                height={300}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="jobRole" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalDays" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default EmployeeDaysPresentGraph;
