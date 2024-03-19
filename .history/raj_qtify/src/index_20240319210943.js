import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Search from './component/Search/Search';
import Logo from './component/Logo/Logo';
// import Button from './component/Button/Button';
import Navbar from './component/Navbar/Navbar';

// import Searchbar from './searchbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
    <Logo/>
    {/* <Button/> */}
    <Navbar/>


    {/* <App /> */}
  </React.StrictMode>
);