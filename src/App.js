import GlobalStyles from './globalStyles';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*    COMPONENTS    */
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import YourRestaurant from './Components/YourRestaurant/YourRestaurant';
import RestaurantTables from './Components/RestaurantTables/RestaurantTables';

function App() {

  const [isLogged, setIsLogged] = useState(localStorage.getItem('userData') ? true : false);

  return (
    <>
        <Router>
          <GlobalStyles />
          <Header 
            setIsLogged={setIsLogged} 
            isLogged={isLogged} 
          />
          <Switch>
            <Route path='/' exact>
              {
              isLogged ? <YourRestaurant isLogged={isLogged} /> : <MainPage />
              }
            </Route>

            <Route path='/register'>
              <Register isLogged={isLogged} />
            </Route>
            
            <Route path='/login' >
              <Login 
                setIsLogged={setIsLogged} 
                isLogged={isLogged} 
              />
            </Route>

            <Route path='/restaurant-tables'>
              <RestaurantTables />
            </Route>
          </Switch>
        </Router>
    </>
  )
};

export default App;
