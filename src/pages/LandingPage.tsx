import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from 'react-router';

interface Props {
    setUsername: Dispatch<SetStateAction<string>>;
}

const LandingPage: React.FC<Props> = (props) => {
    const history = useHistory();

    const [username, setUsername] = useState<string>("");

    return (
        <div>
            <h1>Landing Page</h1>
            <Container maxWidth="sm">
                <Stack direction="column">
                    <Typography>Please enter your Username</Typography>
                    <br/>
                    <TextField 
                    id="email" 
                    label="Username" 
                    variant="outlined" 
                    value={username}
                    onChange={(event) => {setUsername(event.target.value);}}
                    autoComplete="off"
                    />
                    <br/>
                    <Button variant="contained" onClick={()=>{
                        history.push("/dashboard");
                        props.setUsername(username);
                    }}>
                        Dashboard
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default LandingPage
