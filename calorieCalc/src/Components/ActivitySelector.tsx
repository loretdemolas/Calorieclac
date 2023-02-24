import { MenuItem, TextField } from "@mui/material"
import { useState } from "react";

export default function ActivitySelector() {
    
    const [input, setInput] = useState('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
        console.log(value)
    }
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
    
    return (
    <>
        <TextField
            sx={{
                m: 1,
                fontFamily: 'monospace',
                maxWidth: 200,
                }}
            id="activityLevel"
            select
            label="Activity Level"
            value={input}
            onChange={inputHandler}
            helperText="Please select your estimated activity level"
        >
            {activityLevelValue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        
    </>
    ) 
}