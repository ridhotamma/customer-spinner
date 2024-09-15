import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './hoc/MainLayout';
import './index.css';
import HomePage from './components/pages/home';
import SpinnerPage from './components/pages/spinner';
import CustomerPage from './components/pages/customer';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/spinner' element={<SpinnerPage />} />
          <Route path='/customer' element={<CustomerPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
