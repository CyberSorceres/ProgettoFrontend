import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import "./Registrazione.css"
import BackButton from './BackButton';
import { api } from './App';

const steps = ['Step 1', 'Step 2'];

const RegistrationStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
     email: '' ,
     password: '', confirmPassword: '' ,
  });
    const navigate = useNavigate();
    const inviteId = useLoaderData()

  const location = useLocation();
  const [isStep1Valid, setIsStep1Valid] = useState(false);

  useEffect(() => {
    // Validate Step 1 data
    if (formData.email.trim() !== '') {
      setIsStep1Valid(true);
    } else {
      setIsStep1Valid(false);
    }
  }, [formData]);

  const handleNext = () => {
    
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      //handleSubmit();
    }
  };

  /*const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      navigate(`/registrazione/step${activeStep}`);
    }else{
        navigate('/login');
    }
  };*/

    const updateFormData = (data: any) => {
    setFormData(() => ({
      ...formData,
	...data,
    }));
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);
      await api.register(formData.email, formData.password)
      await api.login(formData.email, formData.password)
      await api.acceptInvite(inviteId)
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
			  {activeStep === 0 ? <Step1 data={formData} updateData={updateFormData} onSubmit={handleNext} /> : <Step2 data={formData} updateData={updateFormData} onSubmit={handleSubmit}/> }
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      </Box>
    </Box>
    </>
  );
};

export default RegistrationStepper;
