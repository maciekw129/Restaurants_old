import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

/*    COMPONENTS    */
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import YourRestaurant from './Components/YourRestaurant/YourRestaurant';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');

  const toggleIsLogged = () => {
    setIsLogged(!isLogged);
  }

  const changeToken = (token) => {
    setToken(token)
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header
        isLogged={isLogged}
        toggleIsLogged={toggleIsLogged}
        changeToken={changeToken}
        />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' >
            <Login
            changeToken={changeToken}
            toggleIsLogged={toggleIsLogged}
            />
          </Route>
          <Route path='/your-restaurant' component={YourRestaurant} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
