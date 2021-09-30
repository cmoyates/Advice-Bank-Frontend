import { AppBar, Avatar, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useHistory } from 'react-router';
import PostDetailsDialog from '../components/PostDetailsDialog';
import PostGrid from '../components/PostGrid';
import SettingsMenu from '../components/SettingsMenu';
import SubmitPostDialog from "../components/SubmitPostDialog";
import { userContext } from '../Context';
import { Post, User } from '../types/maintypes';
import MenuIcon from '@mui/icons-material/Menu';
import SearchStack from '../components/SearchStack';

interface Props {
    userData: User | null
}

const Dashboard: React.FC<Props> = (props) => {

    const context = useContext(userContext);

    const theme = useTheme();
    const isMedScreen = useMediaQuery(theme.breakpoints.down("md"));

    let history = useHistory();

    const anchorRef = useRef(null);

    const [submitDialogOpen, setSubmitDialogOpen] = useState<boolean>(false);
    const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [detailPost, setDetailPost] = useState<Post | null>(null);
    const [posts, setPosts] = useState<Array<Post>>([]);

    const currentDate = new Date();

    const fetchPost = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/`);
        const data = await res.json();

        console.log(data);
        setPosts(data);
    }
    useEffect( () => {
        fetchPost();
    }, [])

    const handleSubmitPost = async (post: object) => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(post)
        });
        await fetchPost();
    };

    const handleShowDetails = (post: Post) => {
        setDetailPost(post);
        setDetailsDialogOpen(true);
    };

    const handleLogout = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': window.location.href
            }
        });
        console.log(res);
        const text = await res.text();
        if (text === "done") {
            context?.setUserObject(null);
            history.push("/");
        }
    };

    return (<Fragment>
        <AppBar position="static" style={{flexShrink: 0}}>
            <Toolbar>
            {(isMedScreen) ? <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>{setDrawerOpen(true);}}
            >
                <MenuIcon />
            </IconButton> : null}
            <Typography variant="h5" flexGrow={1} textAlign="start">Dashboard</Typography>
            {(props.userData) ? <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>{props.userData.user_name}</Typography>
                <IconButton onClick={()=>{setMenuOpen(true);}}>
                    <Avatar alt={props.userData.user_name} src={props.userData.user_img} ref={anchorRef}/>
                </IconButton>
            </Stack> 
            : <Typography>
                You are not logged in
            </Typography>}
            </Toolbar>
        </AppBar>
        <div style={{display: "flex", flexDirection: "row", height: "100%", flex: 1, overflow: "auto"}}>
            <SearchStack isMedScreen={isMedScreen} setSubmitDialogOpen={setSubmitDialogOpen}/>
            <div style={{flex: 3, display: "flex", flexDirection: "column", overflow: "auto", height: "100%"}}>
                <PostGrid posts={posts} handleShowDetails={handleShowDetails} currentDate={currentDate}/>
            </div>
        </div>
        
        <SubmitPostDialog open={submitDialogOpen} setDialogOpen={setSubmitDialogOpen} handleSubmitPost={handleSubmitPost} username={(props.userData) ? props.userData.user_name : ""}/>
        <PostDetailsDialog open={detailsDialogOpen} setDialogOpen={setDetailsDialogOpen} post={detailPost} currentDate={currentDate}/>
        <SettingsMenu open={menuOpen} anchorRef={anchorRef} handleClose={()=>{setMenuOpen(false);}} handleLogout={handleLogout}/>
        <Drawer anchor="left" open={drawerOpen && isMedScreen} onClose={()=>{setDrawerOpen(false);}}>
            <SearchStack isMedScreen={!isMedScreen} setSubmitDialogOpen={setSubmitDialogOpen}/>
        </Drawer>
    </Fragment>);
}

export default Dashboard;