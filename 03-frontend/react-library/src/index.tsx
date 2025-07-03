import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51R5NVqQxqtER6NIRZ0dx42i34AGxrhl98Eod9HX4ApahkPasYBVFvKJCuQ9HQqplxU4TAlDCYvRRgQ4wdR4rYaXv00hfXzWzMi');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
  <App />
    </Elements>
  </BrowserRouter>
);