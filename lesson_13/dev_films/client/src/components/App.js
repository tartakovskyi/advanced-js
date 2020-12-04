import React, {Component} from "react"
import {Route} from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'
import FilmsPage from './FilmsPage'
import HomePage from './HomePage'
import FilmDetails from './film/FilmDetails'


const AppContext = React.createContext()
export {AppContext}

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <TopNavigation />
                <Route exact path='/' component={HomePage} />
                <Route path='/films' component={FilmsPage} />
                <Route path='/film/:_id' component={FilmDetails} />
            </div>
        )
    }
}

export default App
