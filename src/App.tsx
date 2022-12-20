// import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // useLocation,
} from "react-router-dom";
import Event from "./Pages/Event";
import Book from "./Pages/Book";
import OrderList from "./Pages/OrderList";
import Thanks from "./Components/Thanks";


function App() {
  return (
    <div>

      <BrowserRouter>
      {/* <Navbar /> */}

        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/book" element={<Book />} />
          <Route path="/booking/congrates" element={<Thanks />} />
          <Route path="/booking/booking-list" element={<OrderList />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
