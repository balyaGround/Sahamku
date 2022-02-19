import { Switch, Route } from "react-router-dom";
import Login from "../component/login";
import LandingPage from "../pages/LandingPage";
import Main from "../pages/Main/main";
function Router() {
  // console.log("window location", window.location.pathname);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route path="*">
          <h1>Erorrrrrr :(</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Router;
