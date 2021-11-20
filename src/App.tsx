import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './hooks/useProducts';

import Content from './routes/Content';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Content />
        <GlobalStyles />
      </ProductsProvider>
    </BrowserRouter>
  );
};

export default App;
