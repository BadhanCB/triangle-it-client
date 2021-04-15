import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/admin/orderlist'>
            <OrderList />
          </Route>
          <Route path='/admin/addservice'>
            <AddService />
          </Route>
          <Route path='/admin/makeadmin'>
            <MakeAdmin />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
