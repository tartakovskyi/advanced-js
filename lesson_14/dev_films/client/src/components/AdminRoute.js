import React, {useContext} from "react"
import {Route, Redirect} from 'react-router-dom'
import {AppContext} from './App'
import FilmForm from "./forms/FilmForm"

const AdminRoute = (props) => {

    const {user} = useContext(AppContext);

    if (user && user.role === 'admin') {
        return (<Route path={props.path} render={props.render}  />)
    } else {
        return (<Route path='/films/*' render={() => <Redirect to='/films' />} />)
    }
}


export default AdminRoute
