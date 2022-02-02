import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Layout from './pages/Layout';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import Products from './pages/Products';
import Categories from './pages/Categories';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/login' element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path='/protected' element={<Protected />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
