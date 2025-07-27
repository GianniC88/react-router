import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./layout/DefaultLayout"
import PageA from "./pages/PageA"
import PageB from "./pages/PageB"
import SingleProduct from "./pages/SingleProduct"

import Footer from "./pages/Footer"
export default function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>

            <Route path="/" Component={HomePage} />

            <Route path="/pageA" Component={PageA} />
            <Route path="/pageB" Component={PageB} />
            <Route path="/product/:id" Component={SingleProduct} />


          </Route>


        </Routes>

      </BrowserRouter>
    </>
  )

}



