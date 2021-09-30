import { Button, Paper, Stack, styled, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'


interface Props {
    isMedScreen: boolean,
    setSubmitDialogOpen: Dispatch<SetStateAction<boolean>>
}

const SearchStack: React.FC<Props> = (props) => {

    const Root = styled(Paper)(() => ({
        flex: 1,
        paddingTop: 30,
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        display: (props.isMedScreen) ? "none" : "flex"
      }));

    return (
        <Root>
            <Stack direction="column" justifyContent="start" alignItems="center" spacing={4} height="100%">
                <Button variant="contained" onClick={()=>props.setSubmitDialogOpen(true)}>
                    Post
                </Button>
                <TextField id="outlined-basic" label="Search" variant="outlined" />
            </Stack>
        </Root>
    )
}

export default SearchStack
