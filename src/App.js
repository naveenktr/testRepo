import { Grid, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme from "./Assets/theme";
import CustomCard from "./Components/Card/Card";
import DashboardTable from "./Components/DashboardTable/DashboardTable";
import Layout from "./Components/Shared/Layout/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <>
          <div className="App">
            <Typography variant="h5" mt={2} mb={2} color={theme.palette.text.blue.primary}>Real World Regulatory Intelligence Offering</Typography>
            <div>
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <CustomCard text="Total number of records in the form" number={11345} variant="blue"/>
                </Grid>
                <Grid item sm={4}>
                  <CustomCard text="Total number of records Added in last week" number={1230} variant="white"/>
                </Grid>
                <Grid item sm={4}>
                  <CustomCard text="Total number of records modified/deleted in last week" number={756} variant="orange"/>
                </Grid>
              </Grid>
            </div>
            <Box mt={2}>
              <DashboardTable/>
            </Box>
          </div>
        </>
      </Layout>
    </ThemeProvider>
  );
}
