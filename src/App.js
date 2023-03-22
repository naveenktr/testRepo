import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/theme";
import Layout from "./Components/Shared/Layout/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <>
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10} md={8}>
                Test
              </Grid>
            </Grid>
          </div>
        </>
      </Layout>
    </ThemeProvider>
  );
}
