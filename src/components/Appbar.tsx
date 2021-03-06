import { AppBar, Avatar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import {User} from "../types/maintypes";
import MenuIcon from '@mui/icons-material/Menu';


interface Props {
    userData: User | null | undefined,
    isMedScreen: boolean,
    setDrawerOpen: Dispatch<SetStateAction<boolean>>,
    setMenuOpen: Dispatch<SetStateAction<boolean>>,
    anchorRef: React.MutableRefObject<null>
};

const Appbar: React.FC<Props> = (props) => {
    return (
        <AppBar position="static" style={{flexShrink: 0}}>
            <Toolbar>
            {(props.isMedScreen) ? <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>{props.setDrawerOpen(true);}}
            >
                <MenuIcon />
            </IconButton> : null}
            <Typography variant="h5" flexGrow={1} textAlign="start">Dashboard</Typography>
            {(props.userData) ? <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>{props.userData.user_name}</Typography>
                <IconButton onClick={()=>{props.setMenuOpen(true);}}>
                    <Avatar alt={props.userData.user_name} src={props.userData.user_img} ref={props.anchorRef}/>
                </IconButton>
            </Stack> 
            : <Typography>
                You are not logged in
            </Typography>}
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
