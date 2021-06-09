import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {routes} from './config/routes'
import {Navbar} from './components/navbar/Navbar'

function App() {
  
  return (
    <Router>
      <Navbar/>
        <Switch>
          {routes.map((route) => {
            return(
              <Route
                  path={route.path}
                  component={route.component}
                />
            )
          })}
        </Switch>
    </Router>
  );
}

export default App;
