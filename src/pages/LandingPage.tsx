import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const LandingPage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Landing Page</h1>
            <Button variant="contained" onClick={()=>{
                history.push("/dashboard");
            }}>
                Dashboard
            </Button>
        </div>
    )
}

export default LandingPage
