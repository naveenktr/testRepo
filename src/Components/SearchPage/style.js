import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const SearchWrapper = styled(Box)(({ theme }) => ({
    width:'100%',
    height:'calc(100vh - 120px)',
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
}));
export { SearchWrapper };