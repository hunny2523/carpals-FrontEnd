import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Request from "./pages/RequestPagePassenger/Request";
import Model from "./Components/Model";

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
          {/* <Request/> */}
          {/* <Model/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
