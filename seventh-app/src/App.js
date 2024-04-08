import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import Products from './Components/Products';
import FetchUsers from './Components/FetchData';
import Product from './Components/Product';

function App() {
  let [user, setUser] = useState(null)
  useEffect(() => {
    console.log('UseEffect is executed...')
    const storedUserDetails = localStorage.getItem('userDetails')
    if (storedUserDetails)
      setUser(JSON.parse(storedUserDetails))
  }, []
  )
  const handleLogin = (loginUser) => {
    alert('handlelogin')
    setUser(loginUser)
    localStorage.setItem('userDetails', JSON.stringify(loginUser))
  }
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('userDetails')
  }
  let product = [{ 'name': 'Boult', 'price': 2000, 'description': 'Bluetooth' },
  { 'name': 'Boat', 'price': 1500, 'description': 'Bluetooth' },
  { 'name': 'JBL', 'price': 3000, 'description': 'Bluetooth' },
  { 'name': 'Skull Candy', 'price': 4000, 'description': 'Bluetooth' }];
  return (
    <div className="App">
      
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/home'><b>Home</b></Link>
            </li>
            <li>
              <Link to='/aboutus'><b>AboutUs</b></Link>
            </li>
            {user ?
              (<><li>
                <Link><b>Welcome {user.email}</b></Link>
              </li> <li><a onClick={handleLogout}>logout</a></li></>) :
              (<li>
                <Link to='/login'><b>Login</b></Link>
              </li>)
            }
            <li>
            
              <Link to='/products'><b>Products</b></Link>
            </li>
            <li>
              <Link to='/fetchusers'><b>Users</b></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/login' element={<Login onLogin={handleLogin}></Login>}></Route>
          
          <Route path='/products' element={<Product data={product}></Product>}></Route>
          <Route path='/fetchusers' element={<FetchUsers></FetchUsers>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;