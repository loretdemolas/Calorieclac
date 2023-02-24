import { MenuItem, TextField } from "@mui/material"
import { useState } from "react";

export default function SexSelector() {
    
    const [input, setInput] = useState('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
        console.log(value)
    }
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
    
    return (
        <>
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
                value={input}
                onChange={inputHandler}
                helperText="Please select sex"
            >    
                {sexSelection.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField> 
        </>
    ) 
}