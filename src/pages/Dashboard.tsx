import { Drawer, useMediaQuery, useTheme } from '@mui/material'
import React, { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useHistory } from 'react-router';
import PostDetailsDialog from '../components/PostDetailsDialog';
import PostGrid from '../components/PostGrid';
import SettingsMenu from '../components/SettingsMenu';
import SubmitPostDialog from "../components/SubmitPostDialog";
import { userContext } from '../Context';
import { Post, User } from '../types/maintypes';
import SearchStack from '../components/SearchStack';
import Appbar from '../components/Appbar';

interface Props {
    userData: User | null
}

const Dashboard: React.FC<Props> = (props) => {

    const context = useContext(userContext);
    const isLoggedIn = Boolean(context && context.userObject)

    const theme = useTheme();
    const isMedScreen = useMediaQuery(theme.breakpoints.down("md"));

    let history = useHistory();

    const anchorRef = useRef(null);

    const [submitDialogOpen, setSubmitDialogOpen] = useState<boolean>(false);
    const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [detailPost, setDetailPost] = useState<Post | null>(null);
    const [searchTags, setSearchTags] = useState<Set<string>>(new Set<string>())
    const [posts, setPosts] = useState<Array<Post>>([]);

    const currentDate = new Date();

    const fetchPost = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/`);
        const data = await res.json();

        console.log(data);
        setPosts(data);
    }
    useEffect( () => {
        document.title = "Dashboard";
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

    return (
        <Fragment>
            <Appbar userData={context?.userObject} isMedScreen={isMedScreen} setDrawerOpen={setDrawerOpen} setMenuOpen={setMenuOpen} anchorRef={anchorRef}/>
            <div style={{display: "flex", flexDirection: "row", height: "100%", flex: 1, overflow: "auto"}}>
                <SearchStack userPrivilege={context?.userObject?.user_privilege} isMedScreen={isMedScreen} setSubmitDialogOpen={setSubmitDialogOpen} tags={searchTags} setTags={setSearchTags} isLoggedIn={isLoggedIn}/>
                <div style={{flex: 3, display: "flex", flexDirection: "column", overflow: "auto", height: "100%"}}>
                    <PostGrid posts={posts} handleShowDetails={handleShowDetails} currentDate={currentDate}/>
                </div>
            </div>
            <SubmitPostDialog open={submitDialogOpen} setDialogOpen={setSubmitDialogOpen} handleSubmitPost={handleSubmitPost} username={(props.userData) ? props.userData.user_name : ""}/>
            <PostDetailsDialog open={detailsDialogOpen} setDialogOpen={setDetailsDialogOpen} post={detailPost} currentDate={currentDate}/>
            <SettingsMenu userPrivilege={context?.userObject?.user_privilege} open={menuOpen} anchorRef={anchorRef} handleClose={()=>{setMenuOpen(false);}} handleLogout={handleLogout}/>
            <Drawer anchor="left" open={drawerOpen && isMedScreen} onClose={()=>{setDrawerOpen(false);}} style={{width: "90vw", maxWidth: "90vw"}}>
                <SearchStack userPrivilege={context?.userObject?.user_privilege} isMedScreen={!isMedScreen} setSubmitDialogOpen={setSubmitDialogOpen} tags={searchTags} setTags={setSearchTags} isLoggedIn={isLoggedIn}/>
            </Drawer>
        </Fragment>
    );
}

export default Dashboard;