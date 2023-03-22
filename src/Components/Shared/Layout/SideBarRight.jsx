import * as React from 'react';
import List from '@mui/material/List';
import { DrawerRight } from "./styles";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';


const SideBarRight = (props)=>{
    return(
        <DrawerRight variant="permanent" open sx={{minHeight: '100%',}}>
          <List component="nav">
            <ListItem>
                <ListItemText
                    primary={
                        <Typography variant="h6">
                            Recent Customer Visit
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                        {"Last updated : Wed, 08.0.23 00:10AM"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText primary="David" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText primary="Michel" secondary="Jan 10, 2015" />
            </ListItem>
          </List>
        </DrawerRight>
    )
}
export default SideBarRight;