import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import "./Registrazione.css"

const steps = ['Step 1', 'Step 2'];

const RegistrationStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [formData, setFormData] = useState({
    step1Data: { email: '' },
    step2Data:{ oldPassword: '' ,password: '', confirmPassword: '' },
  });
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (isFirstLoad) {
        // Se è il primo caricamento, reindirizza allo step 1
        navigate('/registrazione/step1');
        setActiveStep(0);
        setIsFirstLoad(false); // Imposta lo stato per indicare che il primo caricamento è avvenuto
      } else {
        // Aggiorna l'activeStep in base al percorso corrente
        if (location.pathname === '/registrazione/step1') setActiveStep(0);
        else if (location.pathname === '/registrazione/step2') setActiveStep(1);
      }
    }, [location, navigate, isFirstLoad]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      navigate(`/registrazione/step${activeStep + 2}`);
    }else{
        handleSubmit();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      navigate(`/registrazione/step${activeStep}`);
    }else{
        navigate('/login');
    }
  };

  const updateFormData = (step: string, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Qui puoi fare qualsiasi cosa con i dati del modulo, come inviarli a un server
  };

  return (
    <>
    
    
    <Box className="divRegistrazione" sx={{ width: '60%' }}>
    <h3>Registrazione</h3>
      <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Routes>
        <Route path="step1" element={<Step1 data={formData.step1Data} updateData={(data: any) => updateFormData('step1Data', data)} />} />
        <Route path="step2" element={<Step2 data={formData.step1Data} updateData={(data: any) => updateFormData('step1Data', data)} />} />
      </Routes>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
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
    </>
  );
};

export default RegistrationStepper;
