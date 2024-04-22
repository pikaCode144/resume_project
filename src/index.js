import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ScreenLoading from '@/components/basic/ScreenLoading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<ScreenLoading />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
);
