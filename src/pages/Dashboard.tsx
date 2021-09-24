import { AppBar, Grid, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {

    const a = [1,1,1,1,1,1,1];

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Grid container>
                {a.map((item, index)=><Grid item xs={6} key={index}>
                    Test
                </Grid>)}
            </Grid>
        </div>
    )
}

export default Dashboard
