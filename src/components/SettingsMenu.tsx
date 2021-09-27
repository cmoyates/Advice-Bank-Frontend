import { Logout } from '@mui/icons-material'
import { ClickAwayListener, Grow, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import React from 'react'

interface Props {
    open: boolean,
    anchorRef: React.MutableRefObject<null>,
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
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    )
}

export default SettingsMenu
