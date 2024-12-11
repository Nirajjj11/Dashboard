import React, { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';


function DarkLightTheme() {
    const [dark, setDark]= useState("dark")

    return (
        
        <>
        <div>DarkLightTheme</div>
        <Button variant="contained">Hello world</Button>;
        </>

    )
}

export default DarkLightTheme