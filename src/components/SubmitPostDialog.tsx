import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface Props {
    open: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,
    handleSubmitPost: (post: object) => void,
    username: string
}

// https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png


const PostDialog: React.FC<Props> = (props) => {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");


    return (
        <Dialog open={props.open} onClose={()=>props.setDialogOpen(false)}>
            <DialogTitle>Submit a Post</DialogTitle>
            <DialogContent>
                <TextField 
                fullWidth 
                margin="normal" 
                id="title" 
                label="Title" 
                variant="outlined" 
                autoComplete="off"
                value={title}
                onChange={(event) => {setTitle(event.target.value);}}
                />
                <TextField 
                fullWidth 
                margin="dense" 
                id="content" 
                label="Content" 
                variant="outlined" 
                multiline
                rows={4}
                autoComplete="off"
                value={content}
                onChange={(event) => {setContent(event.target.value);}}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={async ()=>{
                    props.setDialogOpen(false);
                    const postData = {
                        user_id: 1,
                        user_name: props.username,
                        user_img: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                        title: title,
                        content: content,
                        tags: []
                    };
                    console.log(postData);
                    await props.handleSubmitPost(postData);
                }}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PostDialog
