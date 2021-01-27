import { createContext,useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import ToDoList from './components/ToDoList/ToDoList';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <div className="App">
    <Login></Login>
      <ToDoList/>
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
