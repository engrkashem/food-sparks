import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useFoods from './hooks/useFoods';
import BreakFast from './Pages/Home/BreakFast/BreakFast';
import Dinner from './Pages/Home/Dinner/Dinner';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Home/Lunch/Lunch';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Shared/Login/Login';
import NavBar from './Pages/Shared/NavBar/NavBar';
import NotFound from './Pages/Shared/NotFound/NotFound';


export const FoodContext = createContext();

function App() {

  const [foods] = useFoods();

  return (
    <div >
      <NavBar></NavBar>
      <FoodContext.Provider value={foods}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}>
            <Route path='breakfast' element={<BreakFast />}></Route>
            <Route path='lunch' element={<Lunch />}></Route>
            <Route path='dinner' element={<Dinner />}></Route></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </FoodContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
