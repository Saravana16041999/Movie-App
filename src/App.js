import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Assets/App.css';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import MovieDetials from './Pages/MovieDetials/MovieDetials'

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='MovieDetials/:Id' element = {<MovieDetials/>} />  
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
