import "../App.css"
import AvatarList from "../components/AvatarList";
import PostList from "../components/PostList";
import { Divider, ThemeProvider, Typography} from "@mui/material";
import theme from "../Theme/theme";
import SuggList from "../components/suggList";

function Main() {

  return (
    <ThemeProvider theme={theme}>
      <div className="main" >
        <div className="main2">
            <AvatarList/>
            <br/>
            <Divider sx={{ border: "0.1px solid grey" }} />
            <PostList/>
        </div>
        <div className="suggest" >
            <div style={{ display:"flex", justifyContent:"space-between" }} >
                <Typography> Suggestions for you </Typography> 
                <Typography> See More </Typography>
            </div>
            <br/>
            <SuggList/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Main;
