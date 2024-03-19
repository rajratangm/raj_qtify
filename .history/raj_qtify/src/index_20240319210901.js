import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Search from './component/Search/Search';
import Logo from './component/Logo/Logo';
import Button from './component/Button/Button';

// import Searchbar from './searchbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
    <Logo/>
    <Button


    {/* <App /> */}
  </React.StrictMode>
);