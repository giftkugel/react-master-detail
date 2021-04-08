import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Master from './Master.js'
import Detail from './Detail.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Master />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
