import { Button, Container, Stack } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

interface Props {

}

const LandingPage: React.FC<Props> = (props) => {

    const history = useHistory();

    const handleLogin = async () => {
        window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, "_self");
    }

    return (
        <div>
            <h1>Landing Page</h1>
            <Container maxWidth="sm">
                <Stack direction="column" alignItems="center" spacing={2}>
                    <Button variant="contained" onClick={()=>{handleLogin();}}>
                        Login with Google
                    </Button>
                    <Button variant="contained" onClick={()=>{history.push("/dashboard");}}>
                        Continue without logging in
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default LandingPage
