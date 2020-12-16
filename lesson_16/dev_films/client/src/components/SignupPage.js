import React from 'react'
import SignupForm from './forms/SignupForm'
import api from '../api'

const SignupPage = props => {
    const submit = user =>
        api.users
            .create(user)
            .then(() => props.setMessage('You have been successfully signed up'))
            .then(() => props.history.push('/login'))

    return (
        <div className='ui grid'>
            <div className='eight wide column'>
                <SignupForm submit={submit}/>
            </div>
        </div>
    )
}

export default SignupPage
