
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'

// semantic
import { Container , Grid} from 'semantic-ui-react'
// pages
import Home from './pages/Home'
import MyWork from './components/MyWork'
import LeftPanel from './components/LeftPanel'
// css
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div className = "home">
      <Router>
        <Switch>
          <Container>
              <Grid columns = {2} divided >
                <Grid.Row> 
                  <Grid.Column width = {3}>
                      <LeftPanel />
                  </Grid.Column>
                  <Grid.Column width = {13}>
                    <Route exact path = '/' component = {Home}> <Home /> </Route>
                    <Route exact path = '/mywork' component = {MyWork}> <MyWork /> </Route>
                  </Grid.Column>                  
                </Grid.Row>
              </Grid>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
