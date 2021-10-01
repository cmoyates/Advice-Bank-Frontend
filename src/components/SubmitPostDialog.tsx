import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import TagInput from './TagInput';

interface Props {
    open: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,
    handleSubmitPost: (post: object) => void,
    username: string
}


const PostDialog: React.FC<Props> = (props) => {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [tags, setTags] = useState<Set<string>>(new Set<string>());

    return (
        <Dialog open={props.open} onClose={()=>props.setDialogOpen(false)} fullWidth>
            <DialogTitle>Submit a Post</DialogTitle>
            <DialogContent>
                <Stack spacing={2} paddingTop={1}>
                    <TextField 
                    fullWidth 
                    id="title" 
                    label="Title" 
                    variant="outlined" 
                    autoComplete="off"
                    value={title}
                    onChange={(event) => {setTitle(event.target.value);}}
                    />
                    <TextField 
                    fullWidth 
                    id="content" 
                    label="Content" 
                    variant="outlined" 
                    multiline
                    rows={4}
                    autoComplete="off"
                    value={content}
                    onChange={(event) => {setContent(event.target.value);}}
                    />
                    <TagInput tags={tags} setTags={setTags} fullWidth/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={async ()=>{
                    props.setDialogOpen(false);
                    const tagArray = Array.from(tags);
                    const postData = {
                        user_id: 1,
                        user_name: props.username,
                        user_img: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                        title: title,
                        content: content,
                        tags: tagArray
                    };
                    console.log(postData);
                    await props.handleSubmitPost(postData);
                    setTitle("");
                    setContent("");
                    setTags(new Set<string>());
                }}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PostDialog
