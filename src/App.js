import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/admin/orderlist'>
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path='/admin/addservice'>
            <AddService />
          </PrivateRoute>
          <PrivateRoute path='/admin/makeadmin'>
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path='/userprofile'>
            <UserProfile />
          </PrivateRoute>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
