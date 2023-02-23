import TextField from "@mui/material/TextField/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import { border, borderRadius } from "@mui/system";
import { Container, Typography } from "@mui/material";


const sexSelection = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];

const activityLevelValue = [
  {
    value: 1.2,
    label: 'sedentary (little or no exercise)',
  },
  {
    value: 1.375,
    label: 'lightly active (light exercise or sports 1-3 days/week)',
  },
  {
    value: 1.55,
    label: 'moderately active (moderate exercise 3-5 days/week)',
  },
  {
    value: 1.725,
    label: 'very active (hard exercise 6-7 days/week)',
  },
  {
    value: 1.9,
    label: 'super active (very hard exercise and a physical job)',
  },
];
const initialValues = {
  age: "",
  height: "",
  weight: "",
  activityLevel: "",
};

interface Calc {
  age: number;
  height: number;
  weight: number;
  activityLevel: number;
  sex: string;
}

export default function App() {

  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(71);
  const [weight, setWeight] = useState(185);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [sex, setSex] = useState('');
    
  return (
    <Container maxWidth='sm'>
      <Box
      sx= {{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Box>
        <Typography
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              Width: 300,
              typography: 'h2'
          }} 
          > Calorie Calculator 
          </Typography>
          <Typography
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              Width: 300,
              typography: 'subtile1',
          }} 
          > Simply Calorie Calculator
          </Typography>
        </Box>
        <Box
        component="form"
        sx={{
          m: 1, 
          display: 'flex',
          width: 300,
          flexWrap: 'wrap',
          border: 1,
          padding: 5,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: '16px',
          boxShadow: 5,
          

        }}
        noValidate
        autoComplete="off"
      >
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
          }} 
            id="age"
            label="age"
            value={age}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAge(event.target.value)}}
            
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
        />
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
          }}  
            id="weight"
            label="weight"
            value={weight}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setWeight(event.target.value);
            }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">lb</InputAdornment>,
            }}
        />
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
          }}  
            id="height"
            label="height"
            value={height}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setHeight(event.target.value);
            }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">Inches</InputAdornment>
            }}
        />
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
          }}  
            id="activityLevel"
            select
            label="Activity Level"
            value={activityLevel}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setActivityLevel(event.target.value);
            }}
            
            helperText="Please select your estimated activity level"
          >
            {activityLevelValue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
              width: 200,
          }} 
            id="sex"
            select
            label="Sex"
            value={sex}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSex(event.target.value);
            }}
            
            helperText="Please select sex"
        >    
            {sexSelection.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField> 
        <Box
          sx={{ 
            m:2,
            fontFamily: 'monospace',
            maxWidth: 200,
            lineHeight: '.3',
            border: 1,
            borderColor: 'grey.400',
            borderRadius: 1,
            px: 5,
            py: 0,
        
        }}         
        >
          {sex === 'male' ? 
          (<p>TDEE= { Math.round(((4.536*weight) + (15.88*height) - (5*age)+5) * activityLevel) }</p>):
          (<p>TDEE= { Math.round(((4.536*weight) + (15.88*height) - (5*age)-161) * activityLevel) }</p>)
          }
          {sex === 'male' ? 
          (<p>RMR= { Math.round(((4.536*weight) + (15.88*height) - (5*age)+5)) }</p>):
          (<p>RMR= { Math.round(((4.536*weight) + (15.88*height) - (5*age)-161)) }</p>)
          }
        </Box>
      </Box>
    </Box>
    </Container>
  );
}