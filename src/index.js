import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux'
import { phonebookStore } from 'Redux/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={phonebookStore}>

    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// base url https://62860485f0e8f0bb7c0e5d72.mockapi.io/