import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Nav from './components/Nav'
import HomeComponents from './components/home-components/HomeComponents'
import SearchResults from './components/search-components/SearchResults'
import ReactionsPage from './components/reaction-page-components/ReactionsPage'

function App() {
  return (
    <Router>
      <div className='container'>

        <Nav />
          
        <React.Suspense>
          <Switch>

            <Route exact path='/' component={HomeComponents} />

            <Route path='/search=(.*)/' render={({ location }) => <SearchResults location={location} />} />

            <Route path='/Reactions' component={ReactionsPage} />

            <Route render={() => <h1>404</h1>} />

          </Switch>
        </React.Suspense>

      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

