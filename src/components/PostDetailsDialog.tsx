import { Button, Dialog, DialogContentText, DialogContent, DialogTitle, Stack } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'

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

interface Props {
    open: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,
    post: Post,
    currentDate: Date
};

const PostDetailsDialog: React.FC<Props> = (props) => {

    let date = new Date(props.post.ts);
    const dateString = (date.getDate() === props.currentDate.getDate()) ? `today at ${date.toLocaleTimeString()}` : `on ${date.toLocaleDateString()}`;

    return (
        <Dialog fullWidth open={props.open} onClose={()=>props.setDialogOpen(false)}>
            <DialogTitle>{props.post.title}</DialogTitle>
            <DialogContent style={{color: "#000000", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px"}}>
                <div>Posted by {props.post.user_name}</div>
                <div>Posted {dateString}</div>
                {(props.post.tags.length > 0) ? <div>
                    Tags: <Stack direction="row" paddingTop="5px" spacing={1}>
                    {props.post.tags.map((item, index)=><Button key={index} size="small" variant="outlined">
                        {item}
                    </Button>)}
                    </Stack>
                </div> : null}
            </DialogContent>
            <DialogContentText padding="20px" style={{color: "#000000"}}>
                "{props.post.content}"
            </DialogContentText>
        </Dialog>
    )
}

export default PostDetailsDialog;
