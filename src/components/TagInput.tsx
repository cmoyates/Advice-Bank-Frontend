import { Chip, Grid, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface Props {
    tags: Set<string>,
    setTags: Dispatch<SetStateAction<Set<string>>>
    fullWidth?: boolean | undefined
};

const TagInput: React.FC<Props> = (props) => {

    const [tagInputValue, setTagInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleAddTag = (tagString: string) => {
        props.setTags(props.tags.add(tagString));
    }

    const handleDeleteTag = (tagString: string) => {
        props.tags.delete(tagString);
        props.setTags(new Set<string>(props.tags));
    };

    const keyPress = (key: React.KeyboardEvent) => {
        if (key.keyCode === 13) {
            if (tagInputValue.length === 0) {
                setError("Tags cannot be blank");
            }
            else if (props.tags.has(tagInputValue)) {
                setError("That tag has already been entered");
            }
            else {
                handleAddTag(tagInputValue);
                setTagInputValue("");
            }
        }
    }

    return (
        <div style={{maxWidth: "100%", minWidth: "100%"}}>
            <TextField
            id="outlined-basic" 
            label="Tags"
            variant="outlined"
            autoComplete="off"
            fullWidth={props.fullWidth}
            value={tagInputValue}
            error={Boolean(error)}
            helperText={error}
            onBlur={()=>{setError("");}}
            onChange={(e)=>{
                setTagInputValue(e.target.value);
                setError("");
            }}
            onKeyDown={keyPress}
            />
            <Grid container spacing={1} paddingTop={1} maxWidth="100%">
                {Array.from(props.tags).map((item, index)=>(
                    <Grid item key={index}>
                        <Chip 
                        label={item}
                        onDelete={()=>{handleDeleteTag(item);}}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default TagInput
