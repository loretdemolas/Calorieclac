import { useContext } from "react";
import { ActivityLevelContext, AgeContext, HeightContext, SexContext, WeightContext } from "./Context";

export default function CalorieCalculator(){
     const age = useContext(AgeContext);
     const weight = useContext(WeightContext);
     const height = useContext(HeightContext);
     const activityLevel = useContext(ActivityLevelContext);
     const sex = useContext(SexContext);
     console.log(age,weight,height,activityLevel,sex)
     
     return(
     <>
          {sex === 'male' ? 
          (<p>TDEE= { Math.round(((4.536*weight) + (15.88*height) - (5*age)+5) * activityLevel) }</p>):
          (<p>TDEE= { Math.round(((4.536*weight) + (15.88*height) - (5*age)-161) * activityLevel) }</p>)
          }
          {sex === 'male' ? 
          (<p>RMR= { Math.round(((4.536*weight) + (15.88*height) - (5*age)+5)) }</p>):
          (<p>RMR= { Math.round(((4.536*weight) + (15.88*height) - (5*age)-161)) }</p>)
          }
     </>
)}     
     




     