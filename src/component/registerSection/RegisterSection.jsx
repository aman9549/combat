import Sections from "../../utilities/sections/Sections";
import "./registerSection.css";
import Button from "../../utilities/Button";
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import img1 from '../../assets/imgi_11_contact-centerimage.png'
import img2 from '../../assets/imgi_12_contact-bottomimage.png'

const RegisterSection = () => {
  return (
    <>
      <div className="register-section">
            
            <div className="register-left">
             <Sections color={"color"} extra={"extra"}
          mainHeading={"Register Now"}
          subHeading={"Book Your Surfing Lesson Now!"}
          content={<>
          <form action="">
            <div className="input-gaps">
             <TextField
  id="filled-basic"
  label="Name"
  variant="filled"
  sx={{
    '& .MuiFilledInput-root': {
      backgroundColor: '#f3f8fb', // light background
      borderRadius: '8px',
      '&:before': {
        borderBottom: '2px solid transparent', // default underline
        
      },
      '&:hover:before': {
        borderBottom: '2px solid transparent', // hover
         backgroundColor: '#f3f8fb',
      },
      '&.Mui-focused:after': {
        borderBottom: '2px solid transparent', // focus
      },
    },
    '& .MuiInputLabel-root': {
      color: '#1494b9', // label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2a2a2b', // label color on focus
    },
  }}
/>
             <TextField
  id="filled-basic"
  label="Phone"
  variant="filled"
  sx={{
    '& .MuiFilledInput-root': {
      backgroundColor: '#f3f8fb', // light background
      borderRadius: '8px',
      '&:before': {
        borderBottom: '2px solid transparent', // default underline
        
      },
      '&:hover:before': {
        borderBottom: '2px solid transparent', // hover
         backgroundColor: '#f3f8fb',
      },
      '&.Mui-focused:after': {
        borderBottom: '2px solid transparent', // focus
      },
    },
    '& .MuiInputLabel-root': {
      color: '#1494b9', // label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2a2a2b', // label color on focus
    },
  }}
/>
             <TextField
  id="filled-basic"
  label="Email"
  variant="filled"
  sx={{
    '& .MuiFilledInput-root': {
      backgroundColor: '#f3f8fb', // light background
      borderRadius: '8px',
      '&:before': {
        borderBottom: '2px solid transparent', // default underline
        
      },
      '&:hover:before': {
        borderBottom: '2px solid transparent', // hover
         backgroundColor: '#f3f8fb',
      },
      '&.Mui-focused:after': {
        borderBottom: '2px solid transparent', // focus
      },
    },
    '& .MuiInputLabel-root': {
      color: '#1494b9', // label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2a2a2b', // label color on focus
    },
  }}
/>
              <TextField
                      select
                      label="Select Session"
                      variant="filled"
                      defaultValue=""
                      sx={{
                        width: "100%",
                        '& .MuiFilledInput-root': {
                          backgroundColor: '#f3f8fb',
                          borderRadius: '8px',
                          '&:before': { borderBottom: '2px solid transparent' },
                          '&:hover:before': { borderBottom: '2px solid transparent',  backgroundColor: '#f3f8fb', },
                          '&.Mui-focused:after': { borderBottom: '2px solid transparent' },
                        },
                        '& .MuiInputLabel-root': { color: '#1494b9' },
                        '& .MuiInputLabel-root.Mui-focused': { color: '#2a2a2b' },
                      }}
                    >
                      <MenuItem value="beginner">Swimming</MenuItem>
                      <MenuItem value="intermediate">Boxing</MenuItem>
                      <MenuItem value="advanced">Cricket</MenuItem>
                      <MenuItem value="private">Golf</MenuItem>
                    </TextField>
             <TextField
  id="filled-basic"
  label="Message..."
  variant="filled"
  sx={{
    '& .MuiFilledInput-root': {
      backgroundColor: '#fff', // light background
      borderRadius: '8px',
      '&:before': {
        borderBottom: '2px solid transparent', // default underline
        
      },
      '&:hover:before': {
        borderBottom: '2px solid transparent', // hover
         backgroundColor: '#f3f8fb',
      },
      '&.Mui-focused:after': {
        borderBottom: '2px solid transparent', // focus
      },
    },
    '& .MuiInputLabel-root': {
      color: '#1494b9', // label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2a2a2b', // label color on focus
    },
  }}
/>

</div>

            <Button text={"submit now"} />
          </form>


          </>}

        />

        <img src={img2} alt="" />

        </div>


        <div className="register-right">
                <img src={img1} alt="" />
        </div>
        


      </div>
    </>
  );
};

export default RegisterSection;
