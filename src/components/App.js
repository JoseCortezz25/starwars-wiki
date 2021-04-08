import logo from '../logo.svg';
import './styles/App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../Pages/Layout'
import ListPlanets from '../Pages/ListPlanets'
import ListPeople from '../Pages/ListPeople'
import Home from '../Pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/planets" component={ListPlanets} />
          <Route exact path="/people" component={ListPeople} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
