import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { increment, decrement } from "./store/reducers/counterSlice";
import { Login } from "./containers/login";
import { Auth } from "./containers/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./containers/home";
import { PrivateRoute } from "./containers/privateRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/home" comp={Home} />
      </Switch>
    </div>
  );
}

export default App;
