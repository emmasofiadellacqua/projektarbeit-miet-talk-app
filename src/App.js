import './App.css';
import Intro_page_1 from './pages/Intro_page_1';
import Intro_page_2 from './pages/Intro_page_2';
import Intro_page_3 from './pages/Intro_page_3';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container"> 
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Intro_page_1' component={Intro_page_1}/>
      <Route path='/Intro_page_2' component={Intro_page_2}/>
      <Route path='/Intro_page_3' component={Intro_page_3}/>
    </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <button>
    <Link to='/Intro_page_1'>
    <div>Go on</div>
    </Link>
    </button>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
  };
  
export default App;
