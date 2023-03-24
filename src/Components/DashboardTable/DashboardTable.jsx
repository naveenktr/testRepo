import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomChip, StyledTableCell } from "./styles";

function createData(id,type, url, lasDateScrap, status, totalRec, nextSchedule) {
  return { id,type, url, lasDateScrap, status, totalRec, nextSchedule };
}

const rows = [
  createData(1,'Encap','https://brandworld.iqvia...','2023-02-03 01:20:10 PM','Yes',12345,'2023-04-01 01:45:10 PM'),
  createData(2,'PMR/PMC','https://brandworld.iqvia...','2023-02-03 01:20:10 PM','Yes',12345,'2023-04-01 01:45:10 PM'),
  createData(3,'REMS','https://brandworld.iqvia...','2023-02-03 01:20:10 PM','Yes',12345,'2023-04-01 01:45:10 PM'),
  createData(4,'PAS','https://brandworld.iqvia...','2023-02-03 01:20:10 PM','Yes',12345,'2023-04-01 01:45:10 PM'),
  createData(5,'PMS','https://brandworld.iqvia...','2023-02-03 01:20:10 PM','Yes',12345,'2023-04-01 01:45:10 PM'),
];

const DashboardTable=()=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Source Name</StyledTableCell>
            <StyledTableCell>URL</StyledTableCell>
            <StyledTableCell>Last Web Scrapping Date & Time</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Total record scrapped</StyledTableCell>
            <StyledTableCell>Schedule/Next Web Scrapping Date & Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell><CustomChip type={row.type} label={row.type}/></TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.lasDateScrap}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.totalRec}</TableCell>
              <TableCell>{row.nextSchedule}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DashboardTable;