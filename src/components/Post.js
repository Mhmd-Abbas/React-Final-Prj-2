import { Avatar, Typography } from "@mui/material";
import "../App.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder";
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post(props) {
  return (
    <div className="Post">
        <div className="Header">
          <div style={{ display:"flex"}} >
            <Avatar src={props.avt} sx={{border:" 3px solid indianred "}} />
            <Typography fontSize="13px" fontWeight="bold" color="primary" sx={{ position:"relative", top:"15px", left:"15px" }}  > {props.name} </Typography>
          </div>
            
            <MoreHorizIcon sx={{float:"right", marginTop:"10px" }} color="primary" />
        </div>
        <img className="PostImg" src={props.src} />
        <div style={{display:"flex", padding:"8px", justifyContent:"space-around", width:"25%"}} >
          <FavoriteBorderIcon color="primary" />
          <MapsUgcOutlinedIcon color="primary" />
          <SendOutlinedIcon color="primary" />
        </div>
        <Typography fontSize="13px" fontWeight="bold" color="primary" > {props.likes} Likes </Typography>
        <Typography fontSize="13px" color="primary" > {props.des} . </Typography>
    </div>
  );
}

export default Post;
