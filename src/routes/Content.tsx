import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AddProduct from '../pages/AddProduct';
import NotFound from '../pages/NotFound';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="novo-produto" element={<AddProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Content;
