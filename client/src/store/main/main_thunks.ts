import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const hitOfSalesList = createAsyncThunk('/main/products/', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/product/hit_of_sales');
    return response.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
});

const recommendList = createAsyncThunk('/main/products/', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/product/recommend');
    return response.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
});

const purchasesList = createAsyncThunk('/main/products/', async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/product/${userId}/purchases`);
    return response.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
});

const mainThunks = {
  hitOfSalesList,
  recommendList,
  purchasesList,
};

export default mainThunks;
