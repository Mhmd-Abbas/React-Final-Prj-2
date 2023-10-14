import "../App.css"
import {ThemeProvider} from "@mui/material";
import Sugg from "./sugg";
import theme from "../Theme/theme";
import boy from "../Pics/boy.png";
import nurse from "../Pics/nurse.png";
import man from "../Pics/man.png";
import singer from "../Pics/singer.png";


function SuggList() {
  return (
    <ThemeProvider theme={theme}>
                <Sugg avt={boy} />
                <Sugg avt={nurse} />
                <Sugg avt={man} />
                <Sugg avt={singer} />
                <Sugg avt={man} />
    </ThemeProvider>
  );
}

export default SuggList;
