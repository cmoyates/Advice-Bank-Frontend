import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { Post } from '../types/maintypes';
import PostCard from './PostCard';

interface Props {
    currentDate: Date,
    handleShowDetails: (post: Post) => void,
    posts: Array<Post>,
    addTag: (tagString: string) => void
};

const PostGrid: React.FC<Props> = (props) => {
    
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container padding={2} spacing={4} minHeight="min-content">
            {props.posts.map((item: Post, index: number)=><Grid item xs={isSmallScreen ? 12 : 6} key={index}>
                <PostCard post={item} handleShowDetails={props.handleShowDetails} currentDate={props.currentDate} addTag={props.addTag}/>
            </Grid>)}
        </Grid>
    )
}

export default PostGrid
