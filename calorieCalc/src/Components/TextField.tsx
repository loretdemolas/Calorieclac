import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import { createContext, useState } from "react";

interface Data{
    name:string;
    type: string;
    adornment: string;
}

export default function Age  ({name, type, adornment}:Data){ 
    //const {height}.Context = createContext('Default Value');
    
    const [input, setInput] = useState('');
    
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
    }
    return (
        <TextField
            sx={{ 
              m:1,
              fontFamily: 'monospace',
              maxWidth: 200,
          }}  
            id={name}
            label={name}
            value={input}
            onChange={inputHandler}
            type={type}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>
            }}
        />
    )
}