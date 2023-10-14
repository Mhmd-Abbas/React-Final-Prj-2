import "../App.css"
import {Avatar, ThemeProvider, Typography} from "@mui/material";
import theme from "../Theme/theme";

function Sugg(props) {
  return (
    <ThemeProvider theme={theme}>
       <div style={{ display:"flex", justifyContent:"space-between" , padding:"8px" }} >
                <div style={{ display:"flex", padding:"7px", width:"55%", justifyContent:"space-between" }} >
                  <Avatar src={props.avt} />
                  <Typography> Some Name </Typography>
                </div>
                <Typography color="blue" > Follow </Typography>
        </div>
    </ThemeProvider>
  );
}

export default Sugg;
