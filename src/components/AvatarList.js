import { Avatar, Stack } from '@mui/material';
import '../App.css';
import boy from "../Pics/boy.png";
import nurse from "../Pics/nurse.png";
import singer from "../Pics/singer.png";
import steward from '../Pics/steward.png';


function AvatarList() {
  return (
        <Stack direction="row" spacing={2} sx={{ marginTop:"15px" }}  >
            <Avatar  src={steward} sx={{border:" 3px solid indianred "  }}  />
            <Avatar  src={boy} sx={{border:" 3px solid indianred "   }}  />
            <Avatar  src={nurse} sx={{border:" 3px solid indianred "  }}  />
            <Avatar  src={singer} sx={{border:" 3px solid indianred "  }}  />
            <Avatar  src={steward} sx={{border:" 3px solid indianred "  }}  />
            <Avatar  src={nurse} sx={{border:" 3px solid indianred "  }}  />
        </Stack>
  );
}

export default AvatarList;
