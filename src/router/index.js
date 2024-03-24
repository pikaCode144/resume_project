import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/views/Home.jsx'));
const Template = React.lazy(() => import('@/views/Template.jsx'));
const Resume = React.lazy(() => import('@/views/Resume.jsx'));
const Login = React.lazy(() => import('@/views/Login.jsx'));
const Register = React.lazy(() => import('@/views/Register.jsx'));
const Builder = React.lazy(() => import('@/views/Builder.jsx'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/template',
    element: <Template />
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/builder',
    element: <Builder />
  }
];

export default routes;
