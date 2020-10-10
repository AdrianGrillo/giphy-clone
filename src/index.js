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

      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

