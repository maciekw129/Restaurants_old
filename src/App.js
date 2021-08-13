import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

/*    COMPONENTS    */
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import RestaurantsList from './Components/RestaurantsList/RestaurantsList';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [restaurantId, setRestaurantId] = useState('');

  const toggleIsLogged = () => {
    setIsLogged(!isLogged);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/restaurants-list' component={RestaurantsList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
