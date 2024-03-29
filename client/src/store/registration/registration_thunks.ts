import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFormValues } from '../../types/interfaces';

const registrNewUser = createAsyncThunk(
  'registration',
  async (regData: IFormValues) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/registration',
        regData,
      );
      return response.data;
    } catch (error) {
      return (error as AxiosError).response?.data;
    }
  },
);

const registrationThunks = {
  registrNewUser,
};

export default registrationThunks;
