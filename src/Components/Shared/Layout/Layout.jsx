import { Box, Toolbar } from '@mui/material';
import * as React from 'react';
import Header from "./Header";
import SideBar from "./Sidebar";
import SideBarRight from './SideBarRight';
import { DashBoardWrapper } from "./styles";

const Layout =(props)=>{
    const{children,rightNav}=props;
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return(
        <>
        <Box sx={{ display: 'flex' }}>
            <Header open={open} toggleDrawer={toggleDrawer}/>
            <SideBar open={open} toggleDrawer={toggleDrawer}/>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
                >
                <Toolbar/>
                <DashBoardWrapper>
                    <Box sx={{width:'100%',padding:'0px 15px'}}>
                        {children}
                    </Box>
                    {rightNav && (
                        <SideBarRight/>
                    )}
                </DashBoardWrapper>
            </Box>
        </Box>
        </>
    )
}
export default Layout;