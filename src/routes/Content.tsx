import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import FormsAddNewProduct from '../pages/FormsAddNewProduct';
import NotFound from '../pages/NotFound';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="novo-produto" element={<FormsAddNewProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Content;
