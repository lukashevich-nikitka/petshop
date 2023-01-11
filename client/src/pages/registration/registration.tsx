import React, { useState } from 'react';
import {
  Box, FormControl, FormHelperText, Input, InputLabel, InputAdornment, IconButton, MenuItem, Button,
} from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../types/redux-hooks';
import '../../styles/registration/registration.scss';
import registrationThunks from '../../store/registration/registration_thunks';
import { IFormValues } from '../../types/interfaces';

const Registration: React.FC = function () {
  const { registrNewUser } = registrationThunks;
  const { register, handleSubmit, reset } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    dispatch(registrNewUser(data));
    reset();
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [age, setAge] = React.useState('');
  const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);
  const handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    event.preventDefault();
  };
  const handleChange: (event: SelectChangeEvent) => void = (event) => {
    setAge(event.target.value);
  };
  const ageRange: Array<number> = Array(100).fill(1);
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      className="registration-form-wrapper"
      component="form"
      autoComplete="off"
    >
      <h1>Registration</h1>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-name">Name</InputLabel>
        <Input
          {...register('firstName')}
          id="component-name"
          startAdornment={(
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
                  )}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-last-name">Last name</InputLabel>
        <Input
          {...register('lastName')}
          id="component-last-name"
          startAdornment={(
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
                  )}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-email">Email</InputLabel>
        <Input
          id="component-email"
          type="email"
          {...register('email')}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-password">Password</InputLabel>
        <Input
          id="component-password"
          aria-describedby="component-helper-text"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                {...register('password')}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
                  )}
        />
        <FormHelperText id="component-helper-text">
          Password must include at least 8 characters
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-second-password">Password</InputLabel>
        <Input
          id="component-second-password"
          aria-describedby="component-helper-text"
          type={showPassword ? 'text' : 'password'}
          {...register('repeatPassword')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
                  )}
        />
        <FormHelperText id="component-helper-text">
          Repeat the entered password
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          {...register('age')}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {ageRange.map((_, index) => <MenuItem value={index + 1}>{index + 1}</MenuItem>)}
        </Select>
      </FormControl>
      <Button type="submit" variant="outlined">Register</Button>
    </Box>
  );
};

export default Registration;
