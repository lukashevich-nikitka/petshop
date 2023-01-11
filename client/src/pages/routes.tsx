import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Registration from './registration/registration';

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

const RoutesComponent: React.FC<RoutesProps> = function () {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
};

export default RoutesComponent;
