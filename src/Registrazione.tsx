import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';

const steps = ['Step 1', 'Step 2'];

const RegistrationStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      navigate(`/registrazione/step${activeStep + 2}`);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      navigate(`/registrazione/step${activeStep}`);
    }
  };

  return (

    <Box sx={{ width: '60%' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Routes>
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
      </Routes>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1 }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationStepper;
