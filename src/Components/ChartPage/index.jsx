import { Button, Card, CardContent, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { StyledTableCell, StyledTableRow } from "./styles";
const ChartPage =()=>{
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return(
        <>
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:'bold' }} gutterBottom>
                                Word of the Day
                                </Typography>
                                <div>
                                    Chart here
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={8}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:'bold' }}  gutterBottom>
                                Word of the Day
                                </Typography>
                                <div>
                                    Chart here
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Paper elevation={0} sx={{backgroundColor:'transparent',margin:'20px 0px',textAlign:'right'}}>
                    <Button variant="contained">Generate Report &nbsp; <DownloadIcon/></Button>
                </Paper>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
export default ChartPage;
