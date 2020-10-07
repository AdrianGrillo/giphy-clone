import React from 'react'
import ReactDOM from 'react-dom'
import './css/HomePage.css'
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Nav from './components/Nav'
import HomeComponents from './components/home-components/HomeComponents'
import SearchResults from './components/search-components/SearchResults'
import NavLinkedPage from './components/nav-linked-components/NavLinkedPages'

function App() {
  return (
    <Router>
      <div className='container'>

        <Nav />
          
        <React.Suspense>
          <Switch>

            <Route exact path='/' component={HomeComponents} />

            {/* Regex for our route to capture any number of any combination of characters that the user could search for.
            Then pass the component being rendered the location prop from react router so we can grab what the user searched for
            off of the pathname property */}
            <Route path='/search=(.*)/' render={({ location }) => <SearchResults location={location} />} />

            <Route path={'/Reactions'} render={({ location }) => <NavLinkedPage location={location} />} />

            <Route path={'/Entertainment'} render={({ location }) => <NavLinkedPage location={location} />} />

            <Route path={'/Sports'} render={({ location }) => <NavLinkedPage location={location} />} />

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

