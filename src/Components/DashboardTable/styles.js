import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from "@mui/material/styles";
import { Chip } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e5e5e5',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const CustomChip = styled(Chip)(({ theme,type }) => ({
    fontSize:'14px', 
    borderRadius:'5px',
    ...(type==="Encap" && {
        backgroundColor:'#d4edda',
        color:'#155724',
    }),
    ...(type==="PMR/PMC" && {
        backgroundColor:'#cce5ff',
        color:'#004085',
    }),
    ...(type==="REMS" && {
        backgroundColor:'#fff3cd',
        color:'#856404',
    }),
    ...(type==="PAS" && {
        backgroundColor:'#d1ecf1',
        color:'#0c5460',
    }),
    ...(type==="PMS" && {
        backgroundColor:'#f8d7da',
        color:'#721c24',
    }),
  }));
export {StyledTableCell,CustomChip };