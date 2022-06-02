import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./page/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
