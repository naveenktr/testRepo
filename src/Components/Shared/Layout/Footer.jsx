import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ChimpFooter } from "./styles";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://charitableimpact.com/">
      {new Date().getFullYear()} Demo Technology Inc. 
      </Link>
      - All Rights Reserved.
    </Typography>
  );
}

function Footer(props) {

  return (
    <ChimpFooter component="footer" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </ChimpFooter>
  );
}

export default Footer;