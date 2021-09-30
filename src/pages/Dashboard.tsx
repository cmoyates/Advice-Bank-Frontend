import { AppBar, Avatar, Button, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { Redirect, useHistory } from 'react-router';
import PostCard from '../components/PostCard';
import PostDetailsDialog from '../components/PostDetailsDialog';
import SettingsMenu from '../components/SettingsMenu';
import SubmitPostDialog from "../components/SubmitPostDialog";
import { userContext } from '../Context';
import { Post, User } from '../types/maintypes';


interface Props {
    userData: User | null
}

const Dashboard: React.FC<Props> = (props) => {

    const context = useContext(userContext);

    let history = useHistory();

    const anchorRef = useRef(null);

    const [submitDialogOpen, setSubmitDialogOpen] = useState<boolean>(false);
    const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
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

    return ((!false) ?
        <Fragment>
            <AppBar position="static" style={{flexShrink: 0}}>
                <Toolbar>
                    <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h5">Dashboard</Typography>
                        {(props.userData) ? <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography>{props.userData.user_name}</Typography>
                            <IconButton onClick={()=>{setMenuOpen(true);}}>
                                <Avatar alt={props.userData.user_name} src={props.userData.user_img} ref={anchorRef}/>
                            </IconButton>
                        </Stack> 
                        : <Typography>
                            You are not logged in
                        </Typography>}
                    </Stack>
                </Toolbar>
            </AppBar>
            <div style={{display: "flex", flexDirection: "row", height: "100%", flex: 1, overflow: "auto"}}>
                <Paper style={{flex: 1, paddingTop: 30}}>
                    <Stack direction="column" justifyContent="start" alignItems="center" spacing={4} height="100%">
                        <Button variant="contained" onClick={()=>setSubmitDialogOpen(true)}>
                            Post
                        </Button>
                        <TextField id="outlined-basic" label="Search" variant="outlined" />
                    </Stack>
                </Paper>
                <div style={{flex: 3, display: "flex", flexDirection: "column", overflow: "auto", height: "100%"}}>
                    <Grid container padding={2} spacing={4} minHeight="min-content">
                        {posts.map((item: Post, index: number)=><Grid item xs={6} key={index}>
                            <PostCard post={item} handleShowDetails={handleShowDetails} currentDate={currentDate}/>
                        </Grid>)}
                    </Grid>
                </div>
            </div>
            
            <SubmitPostDialog open={submitDialogOpen} setDialogOpen={setSubmitDialogOpen} handleSubmitPost={handleSubmitPost} username={(props.userData) ? props.userData.user_name : ""}/>
            <PostDetailsDialog open={detailsDialogOpen} setDialogOpen={setDetailsDialogOpen} post={detailPost} currentDate={currentDate}/>
            <SettingsMenu open={menuOpen} anchorRef={anchorRef} handleClose={()=>{setMenuOpen(false);}} handleLogout={handleLogout}/>
        </Fragment> 
        : <Redirect to="/"/> 
    )
}

export default Dashboard;

/*
<Grid container spacing={4} padding="20px" minHeight="min-content" maxHeight="100%">
                        {posts.map((item: Post, index: number)=><Grid item xs={6} key={index}>
                            <PostCard post={item} handleShowDetails={handleShowDetails} currentDate={currentDate}/>
                        </Grid>)}
                    </Grid>
*/