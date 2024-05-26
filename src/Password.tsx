import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface PasswordFieldProps {
  password: string;
  setPassword: (password: string) => void;
  label: string;
  onBlur: () => void;
}

const Password: React.FC<PasswordFieldProps> = ({ password, setPassword, label, onBlur }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="mb-3">
      <label htmlFor="passwordField" className="form-label">
        {label}
      </label>
      <div className="divPassword">
        <input
          type={passwordVisible ? "text" : "password"}
          id="passwordField"
          name="password"
          className="form-control"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onBlur={onBlur}
          required
        />
        <FontAwesomeIcon
          icon={passwordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Password;
