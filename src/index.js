import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import Services from './views/Services';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  {/* //tvingar en omrendering 2 gånger */}
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/news' element={<News />} />
            <Route path='/newsdetails' element={<NewsDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);


