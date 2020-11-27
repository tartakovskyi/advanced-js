import React, {Component} from 'react'
import FormMessage from './FormMessage'

const initialData = {
    email: '',
    password: ''
}

class LoginForm extends Component {
    state = {
        data: initialData,
        errors: {},
    }


    handleSubmit = e => {
        e.preventDefault()
        const errors = this.validate(this.state.data)
        this.setState({errors})

        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
        }
        console.log(this.state.data)
    }

    handleStringChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })

    validate(data) {
        const errors = {};

        if (!data.email) errors.email = 'This field cant be blank';
        if (!data.password) errors.password = 'This field cant be blank';


        return errors
    }

    cleanForm = e => {
        this.setState({ 
            data: initialData,
            errors: {}
        });
    }
    
    render() {
        const {data, errors} = this.state;

        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui  grid">
                    <div className="six wide column">
                        <div className={errors.email ? 'field error': 'field'}>
                            <label>Email</label>
                            <input type="email"  name="email"  id="email" placeholder="example@example.com"
                                   value={data.email}
                                   onChange={this.handleStringChange}
                            />
                            <FormMessage type="error">{errors.email}</FormMessage>
                        </div>
                    </div>                   

                    <div className="six wide column field">
                        <div className={errors.password ? 'field error': 'field'}>
                            <label>Password</label>
                            <input type="password"  name="password"  id="password"  placeholder="Enter your password"
                                   onChange={this.handleStringChange}
                                   value={data.password}
                            />
                            <FormMessage type="error">{errors.password}</FormMessage>
                        </div>
                    </div>
                </div>
                <div className="ui fluid buttons">
                    <button className="ui button primary" type="submit">Ok</button>
                    <div className="or" />
                    <span className="ui button" onClick={this.cleanForm}>Cancel</span>
                </div>
            </form>
        )
    }
}

export default LoginForm;
