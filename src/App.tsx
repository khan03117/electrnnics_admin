// import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import CreateCategory from './pages/Category/CreateCategory'
import ModalCreate from './pages/Modal/ModalCreate'
import ModalView from './pages/Modal/ModalView'
import ProductCreate from './pages/Product/ProductCreate'
import ViewProduct from './pages/Product/ViewProduct'

import VariantBy from './pages/VariantBy'
import CreateVariant from './pages/Variant/CreateVariant'



function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/category' element={<CreateCategory />} />
          <Route path='/modal-create' element={<ModalCreate />} />
          <Route path='/modal-view' element={<ModalView />} />
          <Route path='/add-product' element={<ProductCreate />} />
          <Route path='/view-product' element={<ViewProduct />} />
          <Route path='/variant-by' element={<VariantBy />} />
          <Route path='/variant' element={<CreateVariant />} />






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
