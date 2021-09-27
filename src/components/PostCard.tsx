import { Card, Typography, Stack, Button, CardActions } from '@mui/material'
import React from 'react'
import { Post } from '../types/maintypes';

interface Props {
    post: Post,
    handleShowDetails: (post: Post) => void,
    currentDate: Date
};

const PostCard: React.FC<Props> = (props) => {

    const date = new Date(props.post.ts);
    const dateString = (date.getDate() === props.currentDate.getDate()) ? `${date.toLocaleTimeString()} Today` : date.toLocaleDateString();

    return (
        <Card>
            <Stack direction="row" alignItems="center" justifyContent="space-between" marginX="20px">
                <Typography variant="h4" marginTop="10px">{props.post.title}</Typography>
                <Stack direction="row" spacing={1}>
                    {props.post.tags.map((item: string, index: number)=><Button key={index} variant="outlined" size="small">
                        {item}
                    </Button>)}
                </Stack>
            </Stack>
            <Typography variant="body2" marginLeft="20px" textAlign="left">
                <span style={{cursor: "pointer"}} onClick={()=>console.log(props.post.user_name)}>{props.post.user_name}: </span>
                <span style={{cursor: "pointer"}} onClick={()=>console.log(date.toLocaleString())}>{dateString}</span>
            </Typography>
            <Typography 
            marginX="20px" marginY="10px" 
            textAlign="left" 
            style={{
                maxHeight: "100px",
                height: "100px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4
            }}>
                {props.post.content}
            </Typography>
            <CardActions>
                <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
                    <Button onClick={()=>{
                        props.handleShowDetails(props.post);
                    }}>
                        Details
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default PostCard
