import React from 'react'
import { Navbar } from './components/navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<MainLayout/>} >
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
    
    )
);

const App = () => {
  return <RouterProvider router={router}/>  
}

export default App;