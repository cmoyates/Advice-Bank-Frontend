import { Button, Container, Stack } from '@mui/material';
import React from 'react';

interface Props {

}

const LandingPage: React.FC<Props> = (props) => {

    const handleLogin = async () => {
        window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, "_self");
    }

    return (
        <div>
            <h1>Landing Page</h1>
            <Container maxWidth="sm">
                <Stack direction="column" alignItems="center">
                    <Button variant="contained" onClick={()=>{handleLogin();}}>
                        Login with Google
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default LandingPage
