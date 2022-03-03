import logo from './logo.svg';
import './App.css';
import Home from './Home'
import {About}  from './About'
import {BrowserRouter as Router , Link,Route,Switch,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link 
    to={{ 
    pathname: '/About', 
    state: { message: 'hello, im a passed message!' } 
  }}/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/About" component={About}/>
       </Switch>
       <Redirect to="/"/>
     </Router>
    </div>
  );
}

export default App;
