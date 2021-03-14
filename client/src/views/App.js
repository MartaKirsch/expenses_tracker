import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Navbar from 'views/Navbar';
import LogIn from 'views/LogIn';
import Account from 'views/Account';
import Expenses from 'views/Expenses';
import AddExpense from 'views/AddExpense';
import P404 from 'views/P404';
import Summary from 'views/Summary';
import GlobalStyle from 'theme/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle/>

        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/log-in" component={LogIn}/>
          <Route path="/account" component={Account}/>
          <Route path="/expenses" component={Expenses}/>
          <Route path="/add-expense" component={AddExpense}/>
          <Route path="/update-expense/:id"><AddExpense isUpdate={true}/></Route>
          <Route path="/summary" component={Summary}/>
          <Route path="/" component={P404}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
