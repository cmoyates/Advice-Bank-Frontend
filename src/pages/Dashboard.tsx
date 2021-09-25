import { AppBar, Button, Grid, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';
import PostDetailsDialog from '../components/PostDetailsDialog';
import SubmitPostDialog from "../components/SubmitPostDialog";


interface Post {
    post_id: number,
    user_id: number,
    user_name: string,
    user_img: string,
    title: string,
    content: string,
    tags: Array<string>,
    ts: string
};

const fillerPost: Post = {
    post_id: -1,
    user_id: -1,
    user_name: "",
    user_img: "",
    title: "",
    content: "",
    tags: [],
    ts: ""
}


interface Props {
    username: string
}

const Dashboard: React.FC<Props> = (props) => {

    const [submitDialogOpen, setSubmitDialogOpen] = useState<boolean>(false);
    const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
    const [detailPost, setDetailPost] = useState<Post>(fillerPost);
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

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">{props.username}'s Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <Stack margin="10px" direction="row" justifyContent="space-around" alignItems="center">
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                <Button variant="contained" onClick={()=>setSubmitDialogOpen(true)}>
                    Post
                </Button>
            </Stack>
            <Grid container spacing={4} padding="20px">
                {posts.map((item: Post, index: number)=><Grid item xs={6} key={index}>
                    <PostCard post={item} handleShowDetails={handleShowDetails} currentDate={currentDate}/>
                </Grid>)}
            </Grid>
            <SubmitPostDialog open={submitDialogOpen} setDialogOpen={setSubmitDialogOpen} handleSubmitPost={handleSubmitPost} username={props.username}/>
            <PostDetailsDialog open={detailsDialogOpen} setDialogOpen={setDetailsDialogOpen} post={detailPost} currentDate={currentDate}/>
        </div>
    )
}

export default Dashboard
