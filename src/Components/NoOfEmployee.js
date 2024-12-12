import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Dash.css'

function NoOfEmployee() {
    const [emp, setEmp] = useState(0)
    const apiUrl = "http://localhost:3001/employees"
    const [dat,setDat]=useState(5)

    
    //fetch the no of employee from DB
    useEffect(() => {
        const fetchEmp = async () => {
            try {
                const response = await axios.get(apiUrl);
                setEmp(response.data.length)  // count the no of emp
                setDat(response.data.joiningDate)
                console.log("data",response.data)

            } catch (error) {
                console.error("Error fetching Employees:", error)
            }
        };
        fetchEmp();
    }, [])
    console.log("emp",emp)

    function calculateNewEmployeeMonths(joiningDate) {
        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in months
        const monthDiff = (currentDate.getFullYear() - joiningDate.getFullYear()) * 12 + (currentDate.getMonth() - joiningDate.getMonth());

        // Check if the employee is new (less than 6 months)
        if (monthDiff < 6) {
            return monthDiff;
        } else {
            return 0; // Not a new employee
        }
    }

    // Example usage:
    const joiningDate = new Date(dat); 
    const newEmployeeMonths = calculateNewEmployeeMonths(joiningDate);

    console.log("Number of months since joining:", newEmployeeMonths);

    
    return (
        <div className='FullCount'>
            <h2>Total Employees : {emp}</h2>
            <h2>New Employees : {0}{dat}</h2>
        </div>
    )
}

export default NoOfEmployee