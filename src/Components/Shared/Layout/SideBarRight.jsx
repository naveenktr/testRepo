import * as React from 'react';
import { mainListItems, secondaryListItems } from './listitems';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Drawer } from "./styles";


const SideBarRight = (props)=>{
    return(
        <Drawer variant="permanent" open sx={{minHeight: '100%',}}>
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
    )
}
export default SideBarRight;