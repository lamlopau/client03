import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Layout/Landing';
import Auth from './components/Views/Auth';
import AuthContextProvider from './components/Contexts/AuthContext';
import Dashboard from './components/Views/Dashboard';
import Protectroute from './components/Contexts/ProtectRoute';
function App() {
  return <AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />}></Route>
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
      </Switch>
    </Router>
  </AuthContextProvider>
}

export default App;
