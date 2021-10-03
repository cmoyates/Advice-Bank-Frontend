import { Logout } from '@mui/icons-material'
import { ClickAwayListener, Grow, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import React from 'react'

interface Props {
    open: boolean,
    anchorRef: React.MutableRefObject<null>,
    userPrivilege: number | undefined,
    handleClose: ()=>void,
    handleLogout: ()=>void
};

const SettingsMenu: React.FC<Props> = (props) => {
    return (
        <Popper
          open={props.open}
          anchorEl={props.anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={props.handleClose}>
                  <MenuList
                    autoFocusItem={props.open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem onClick={props.handleLogout}>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                    {(props.userPrivilege !== undefined) ? <div>
                        <MenuItem onClick={()=>{console.log("Saved")}}>
                            <ListItemIcon>
                                <Logout/>
                            </ListItemIcon>
                            <ListItemText>Saved</ListItemText>
                        </MenuItem>
                        {(props.userPrivilege > 1) ? 
                        <MenuItem onClick={()=>{console.log("Manage Users")}}>
                            <ListItemIcon>
                                <Logout/>
                            </ListItemIcon>
                            <ListItemText>Manage Users</ListItemText>
                        </MenuItem> : null}
                    </div> : null}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    )
}

export default SettingsMenu
