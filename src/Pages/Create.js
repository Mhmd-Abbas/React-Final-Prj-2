import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Create() {

  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [imageCover, setImageCover] = React.useState(null);
  const [image, setImage] = React.useState(null)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const token = localStorage.getItem("token")

  const handledescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let formData = new FormData();
  
  formData.append("description", description)
  formData.append("image", image)

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      alert("Post Made!!")
    }).catch((error) => {
      alert(error)
    })
    handleClose()
  }


  return (
    <div>
      <Button onClick={handleOpen} sx={{margin:"0px", padding:"0px", zIndex:"5",height:"50px", width:"180px",overflow:"visible" }}  >Create</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} > 
            <Typography id="transition-modal-title" variant="h6" component="h2" color="primary" textAlign="center" >
              Create New Post
            </Typography>
            <Divider/>
            <Typography id="transition-modal-description"  color="primary" sx={{ mt: 2, display:"flex", justifyContent:"center", textAlign:"left", flexDirection:"column", padding:"10px"   }}>
                Description
                <input className='textinput2' value={description} onChange={handledescriptionChange} />
                <br/>
                <label htmlFor='image-upload' >
                  <Button component="span" variant='filled' sx={{ color:"white", backgroundColor:"CornflowerBlue", width:"70%", height:"30px", marginLeft:"15%", borderRadius:"15px", textTransform:"capitalize" }} >
                    Choose Image 
                  </Button>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}         
                />
                <br/>
                <img
                  src={imageCover}
                  style={{ width: "150px", height:"150px", marginLeft: "30%", objectFit:"contain" }}
                />
                <br/>
                <button onClick={handleSubmit} style={{ width:"40%", height:"30px", marginLeft:"30%", backgroundColor:"CornflowerBlue", borderRadius:"15px", border:"0px", color:"white" }} >Post</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}