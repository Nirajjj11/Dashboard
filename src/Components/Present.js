import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Dash.css'

function Present() {

    // Not working
    const apiUrl = "http://localhost:3001/employees"
    const [present, setPresent] = useState(126*8)
    const [holyDay, setHolyDay]=useState(45)
    useEffect(() => {
        const fetchEmp = async () => {
            try {
                const response = await axios.get(apiUrl);
                // setPresent(count(response.data.daysPresent))  // count the no day employee came     // error here
            } catch (error) {
                console.error("Error fetching Employees:", error)
            }
        };
        fetchEmp();
    }, [])
    console.log(Present)
    return (
        <div className='FullCount'>
            <h2>{present} Hrs of work this Year</h2>
            <h2>{holyDay} out of 365 Days</h2>
        </div>
    )
}

export default Present