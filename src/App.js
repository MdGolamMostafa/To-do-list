import { createContext,useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import ToDoList from './components/ToDoList/ToDoList';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/login">
              <ToDoList></ToDoList>
          </PrivateRoute>
          </Switch>
        </Router>
        </div>
    </UserContext.Provider>
  );
}
export default App;
