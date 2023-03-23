import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Card = styled(Box)(({ theme,variant }) => ({
    backgroundColor: theme.palette.background.footer,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:theme.spacing(1.5),
    paddingBottom:theme.spacing(1.5),
    paddingLeft:theme.spacing(2),
    paddingRight:theme.spacing(2),
    boxShadow:theme.shadows[3],
    ...(variant==="blue" && {
        background:'#aef3eb',
    }),
    ...(variant==="white" && {
        background:'#fff',
    }),
    ...(variant==="orange" && {
        background:'#f5c7a7',
    })
}));
const Text = styled(Box)(({ theme,variant }) => ({
    color:'#333',
    fontSize:'18px',
    fontWeight:'bold',
    paddingRight:'15px',
    ...(variant==="blue" && {
        color:'#333',
    }
    )
}));
const Number = styled(Box)(({ theme,variant }) => ({
    fontSize:'22px',
    fontWeight:'bold',
    ...(variant==="blue" && {
        color:'#079897',
    }),
    ...(variant==="white" && {
        color:'#0069ff',
    }),
    ...(variant==="orange" && {
        color:'#e85f00',
    }),
}));
export { Card,Text,Number };