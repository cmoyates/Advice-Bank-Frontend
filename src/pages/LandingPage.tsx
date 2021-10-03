import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';

interface Props {

}

const LandingPage: React.FC<Props> = (props) => {

    const history = useHistory();

    const handleLogin = async () => {
        window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, "_self");
    }

    return (
        <div className="bgImage">
            <Container>
                <Stack height="100vh" alignItems="start" justifyContent="center">
                    <Typography variant="h1" padding={2} color="white"><b>Advice Bank</b></Typography>
                    <Button size="large" variant="outlined" style={{color: "white", borderColor: "white", marginLeft: "16px"}} onClick={()=>{handleLogin();}} startIcon={<GoogleIcon />}>
                        Login with Google
                    </Button>
                    <Button size="medium" style={{color: "white", marginLeft: "10px"}} onClick={()=>{history.push("/dashboard");}}>
                        Continue without logging in
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default LandingPage