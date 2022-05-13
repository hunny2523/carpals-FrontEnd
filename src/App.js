import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Request from "./pages/RequestPagePassenger/Request";
import Modal from "./Components/Modal";
import DriverInfo from "./pages/DriverInfo/DriverInfo";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div >
      <Router>
        <Switch>
          {/* <Home/> */}
          <Route exact path="/login" element={<Login />}>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register" element={<Register />}>
            {user ? <Redirect to="/" /> : <Register />}
          </Route >
          <Route exact path="/" element={<Home />}>
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/userInfo" element={<DriverInfo/>}>
            <DriverInfo/>
          </Route>
          <Route exact path="/about" element={<About/>}>
            <About/>
          </Route>
          {/* <Request/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
