import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";

function getStepContent(activeStep,handlechg,handleback) {
  console.log(activeStep);

  switch (activeStep) {
    case 0:
      return <Form1 handlechg={handlechg}/>;
    case 1:
      return <Form2 handlechg={handlechg} handleback={handleback}/>;
    case 2:
      return <Form3 handlechg={handlechg}/>;
    default:
      return "invalid data";
  }
}

function StepperForm() {
  const [activestep1, setActiveStep] = useState(0);

  const steps = [
    "Personal information",
   "courses details",
    "General information"];


  const handlechg =()=>{
    setActiveStep(activestep1+1)
  }

  const handleback=()=>{
    setActiveStep(activestep1-1)

  }

  return (
    <>
      <div className="">
        <Stepper activeStep={activestep1} alternativeLabel>
          {steps.map((v, i) => (
            <Step key={i}>
              <StepLabel>{v}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {
        activestep1 == steps.length ? 
          "submit"
         :
         <>
          <Typography>{getStepContent(activestep1,handlechg,handleback)}</Typography>
        
       
          </>
        }

        
      </div>
    </>
  );
}

export default StepperForm;
