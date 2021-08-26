import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoggedProvider } from './LoggedContext';

/*    COMPONENTS    */
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import YourRestaurant from './Components/YourRestaurant/YourRestaurant';

function App() {

  return (
    <>
      <LoggedProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/register' component={Register} />
            <Route path='/login' >
              <Login/>
            </Route>
            <Route path='/your-restaurant' component={YourRestaurant} />
          </Switch>
        </Router>
      </LoggedProvider>
    </>
  )
};

export default App;
