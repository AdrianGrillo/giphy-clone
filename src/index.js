import React from 'react'
import ReactDOM from 'react-dom'
import './scss/home-page.scss'
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Nav from './components/Nav'
import HomeComponents from './components/home-components/HomeComponents'
import Loading from './components/Loading'

// Load these components dynamically only after the user requests them to reduce initial bundle size
const SearchResults = React.lazy(() => import('./components/search-components/SearchResults'))
const NavLinkedPage = React.lazy(() => import('./components/nav-linked-components/NavLinkedPages'))

function App() {
  return (
    <Router>

      <Nav />
        
      <React.Suspense fallback={<Loading />}>
        <Switch>

          <Route exact path='/' component={HomeComponents} />

          {/* Regex for our search route captures any number of any combination of characters that the user could search for.
          Then pass the component being rendered the location prop from react router so we can grab what the user searched for
          off of the pathname property to display on the page */}
          <Route path='/search=(.*)/' render={({ location }) => <SearchResults location={location} />} />

          <Route path={'/Reactions'} component={NavLinkedPage} />

          <Route path={'/Entertainment'} component={NavLinkedPage} />

          <Route path={'/Sports'} component={NavLinkedPage} />

          <Route path={'/Stickers'} component={NavLinkedPage} />

          <Route path={'/About'} component={NavLinkedPage} />

          <Route render={() => <h1>404</h1>} />

        </Switch>
      </React.Suspense>

    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

