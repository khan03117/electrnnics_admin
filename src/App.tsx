// import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import CreateCategory from './pages/Category/CreateCategory'
import ModalCreate from './pages/Modal/ModalCreate'
import ModalView from './pages/Modal/ModalView'
import ProductCreate from './pages/Product/ProductCreate'
import Brand from './pages/Brand'
import CreateBanner from './pages/banner/CreateBanner'
import CreateTestimonial from './pages/testimonial/CreateTestimonial'
import ContactDetails from './pages/contact_details'



function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/category' element={<CreateCategory />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/banner' element={<CreateBanner />} />
          <Route path='/modal-create' element={<ModalCreate />} />
          <Route path='/modal-view' element={<ModalView />} />
          <Route path='/add-product' element={<ProductCreate />} />
          <Route path='/testimonial' element={<CreateTestimonial />} />
          <Route path='/contact-details' element={<ContactDetails/>} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoutes} />
    </>
  )
}

export default App
