import React, { useState } from "react";

import { Stepper, Step, StepLabel,Button, Typography } from "@mui/material";
import Form1 from "./Form/Forms1";
import Form2 from "./Form/Form2";



//form chnage
function getStepContent(activestep1,nextform,Backform) {
    switch (activestep1) {
      case 0:
        return <Form1 nextform={nextform} />
      case 1:
        return <Form2 nextform={nextform} Backform={Backform}/>
      case 2:
        return <h1>form 3</h1>
      default:
        return 'Unknown stepIndex';
    }
  }


function StepperForm() {

    const [activestep1, setActiveStep] = useState(0)

    const steps = [
        'Eductaion information',
         'courses details',
         "cuntry details"
        
        ];


        //function chnage value of active step 
        const nextform = () => {
          console.log("Clicking Next")
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };


      const Backform = () => {
        console.log("Clicking Next")
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



  
   
    return (
        <>
            <div className=''>

                {/* //step  */}

                <Stepper  activeStep={activestep1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/*  */}

                {activestep1 == steps.length 
                ? "submit"
                : 
                <Typography>
                    {getStepContent(activestep1,nextform,Backform)}
                  </Typography> 
                
                }
            </div>
        </>
    )
}

export default StepperForm