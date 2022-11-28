// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // useLocation,
} from "react-router-dom";
import Event from "./Pages/Event";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
        <Navbar />

      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Event />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
