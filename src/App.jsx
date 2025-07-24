import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./layout/DefaultLayout"
export default function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/pageA" Component={PageA} />
            <Route path="/pageB" Component={PageB} />
          </Route>


        </Routes>

      </BrowserRouter>
    </>
  )

}




