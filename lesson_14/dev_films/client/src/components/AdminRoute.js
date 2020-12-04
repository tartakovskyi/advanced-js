import React, {Component} from "react"
import {Route, Redirect} from 'react-router-dom'
import {AppContext} from './App'

const AdminRoute =() => {

    {this.props.user.role === 'admin' ? (
        <>
        <Route
        path="/films/new"
        render={() => (
            <div className="six wide column">
            <FilmForm submit={this.saveFilm} film={{}} />
            </div>
            )}
        />

        <Route
        path="/films/edit/:_id"
        render={props => (
            <div className="six wide column">
            <FilmForm
            submit={this.saveFilm}
            film={  find(this.state.films, { _id: props.match.params._id,}) || {} }
            />
            </div>
            )}
        />
        </>
        ): (
        <Route path='/films/*' render={() => <Redirect to='/films' />} />
        )
    }
}


export default AdminRoute
