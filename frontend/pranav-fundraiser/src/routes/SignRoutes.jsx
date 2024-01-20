import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
// import Fundraiser from "../components/fundraiser/Fundraiser";
import Fundraiser from "../components/Fundraiser/Fundraiser";

const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={
          <Login />
        } />
        <Route index path="/signup" element={<> </>} />
        <Route index path="/forgot-password" element={<> </>} />
        <Route  path='/' element={<Fundraiser/>}/>
        <Route  path='fundraiser/:id' element={<></>}/>
        {/* Redirect to login */}
        <Route path="*"  element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignRoutes;