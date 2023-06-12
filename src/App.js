import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccessfull from "./PaymentSuccessfull";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paymentSuccessfull" element={<PaymentSuccessfull/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
