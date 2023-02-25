import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import TextInput from "./Components/TextField";
import ActivitySelector from "./Components/ActivitySelector";
import SexSelector from "./Components/SexSelector";
import CalorieCalculator from "./Components/CalorieCalcFunc";
import { useState } from "react";


export default function App({input}:any) {

  const initialValues ={
    age: '',
  }
  
  const [Data, setData] = useState(initialValues);
  const display = () => console.log(Data);
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const eventData = ({...Data, [event.target.name]: event.target.value });
        setData(eventData);
        
    }

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
          <button onClick={display}>test</button>
            <TextInput 
              name={"age"} 
              type={"number"} 
              adornment={""}
              onChange={inputHandler}
              value={Data.age}    
            />
            <TextInput
              name={"weight"}
              type={"number"}
              adornment={"lb"}
            />      
            <TextInput
              name={"height"}
              type={"number"}
              adornment={"Inches"}
            />          
            <ActivitySelector/>
            <SexSelector/>
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
          <CalorieCalculator/>
        </Box>
      </Box>
    </Box>
    </Container>
  );
}


