import { Button, Paper, Stack, styled, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import TagInput from './TagInput';


interface Props {
    isMedScreen: boolean,
    setSubmitDialogOpen: Dispatch<SetStateAction<boolean>>,
    maxWidth?: string | number | undefined,
    tags: Set<string>
    setTags: Dispatch<SetStateAction<Set<string>>>,
    isLoggedIn: boolean
    userPrivilege: number | undefined
}

const SearchStack: React.FC<Props> = (props) => {

    const Root = styled(Paper)(() => ({
        flex: 1,
        paddingTop: 30,
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        display: (props.isMedScreen) ? "none" : "flex",
        maxWidth: "90vw"
    }));

    return (
        <Root>
            <Stack direction="column" justifyContent="start" alignItems="center" spacing={2} height="100%" paddingX={4} maxWidth={props.maxWidth}>
                {(props.isLoggedIn && props.userPrivilege !== undefined && props.userPrivilege > 0) ? <Button variant="contained" onClick={()=>props.setSubmitDialogOpen(true)}>
                    Post
                </Button> : null}
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                <TagInput fullWidth tags={props.tags} setTags={props.setTags}/>
            </Stack>
        </Root>
    )
}

export default SearchStack
