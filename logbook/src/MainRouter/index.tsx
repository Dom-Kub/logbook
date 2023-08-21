import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";

function MainRouter(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              {/* <Route index element={<Home />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
export { MainRouter }