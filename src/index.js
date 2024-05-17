import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProSidebarProvider } from "react-pro-sidebar";
import  store  from './redux/store'; // Import persistor
import { Provider } from 'react-redux';

// Import from 'redux-persist'
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
 
      <ProSidebarProvider>
      
      <Provider store={store}>
     
      <App />
     
      </Provider>
   
      </ProSidebarProvider>
    
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);