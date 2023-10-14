import "../App.css"
import {ThemeProvider} from "@mui/material";
import theme from "../Theme/theme";
import { MassegePfp } from "./massegePfp";
import boy from "../Pics/boy.png";
import nurse from "../Pics/nurse.png";
import man from "../Pics/man.png";
import singer from "../Pics/singer.png";

function MsgList() {
  return (
    <ThemeProvider theme={theme}>
        <MassegePfp avt={singer} />
        <MassegePfp avt={man} />
        <MassegePfp avt={nurse} />
        <MassegePfp avt={boy} />
    </ThemeProvider>
  );
}

export default MsgList;
