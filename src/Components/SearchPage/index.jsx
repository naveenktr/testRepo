import { Box, Button, Grid, TextField } from "@mui/material";
import { SearchWrapper } from "./style";

const SearchPage = ()=>{
    return(
        <SearchWrapper>
            <Box sx={{margin:'20px 0px'}}>
                <Grid container spacing={2} sx={{marginBottom:2}}>
                    <Grid item md={6}>
                        <TextField fullWidth id="outlined-basic1" label="Disease" variant="outlined" placeholder="Ex. Rheumatiod" />
                    </Grid>
                    <Grid item md={6}>
                        <TextField fullWidth id="outlined-basic2" label="Brand Name or Active Ingredient" variant="outlined" placeholder="Ex. Xeljanz" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom:2}}>
                    <Grid item md={6}>
                        <TextField fullWidth id="outlined-basic3" label="Therapeutic Area" variant="outlined" placeholder="Ex. Rheumatology" />
                    </Grid>
                    <Grid item md={6}>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <TextField fullWidth id="outlined-basic4" label="Approval Date From" variant="outlined" placeholder="MM/YYYY" />
                            </Grid>
                            <Grid item md={6}>
                                <TextField fullWidth id="outlined-basic5" label="Approval Date To" variant="outlined" placeholder="MM/YYYY" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom:2}}>
                    <Grid item md={10}>
                        <Box sx={{padding:'40px 0px 20px',textAlign:'center'}}>
                            <Button variant="contained" color="success" sx={{minWidth:'200px'}}>Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </SearchWrapper>
    )
}
export default SearchPage;