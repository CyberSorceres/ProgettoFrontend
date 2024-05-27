import React, {useState} from 'react';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';
import Password from './Password';

interface Step2Props {
    data: { password:string, confirmPassword:string};
    updateData: (data: { password?: string; confirmPassword?: string }) => void;
    onSubmit: () => void;  // Add onSubmit prop
  }

const Step2: React.FC<Step2Props> = ({ data, updateData, onSubmit }) => {
    const [error, setError] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateData({ [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            setError('Password e Conferma Password non corrispondono');
            return;
        }
        setError(null);
        onSubmit();
    };

      const handleClick = () => {
        navigate('/registrazione/step1'); 
      };

      const handleBlur = () => {
        setError(null);
      };
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <Password password={data.password} setPassword={(value) => updateData({ password: value })} label={'Password'} onBlur={handleBlur}/>
            <Password password={data.confirmPassword} setPassword={(value) => updateData({ confirmPassword: value })} label={'Conferma Password'} onBlur={handleBlur}/>
            {error && <div className="divErrore">{error}</div>}
            <button type="submit" className="nextBtn">Invia</button>
            <button type="button" className="nextBtn" onClick={handleClick}>Indietro</button>
        </form>
      </div>
    );
};

export default Step2;
