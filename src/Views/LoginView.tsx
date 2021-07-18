import React, { ChangeEvent, Component, FormEvent } from 'react'
import { Redirect } from 'react-router-dom';
import Http from '../Http';
import { Props } from '../Redux/Model';
import LoginState from '../Redux/States/LoginState'

export default class LoginView extends Component<Props> {

    public state: LoginState = new LoginState()


    public handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target);
        this.setState((prevState: LoginState) => {
            prevState.loginModel[name] = value;
            return prevState;
        });
    }
    public submit = async (event: FormEvent) => {
        event.preventDefault();
        const { loginModel } = this.state;
        const response = await Http.post('/signin', { ...loginModel });

    }
    render() {
        if (this.props.isAuthenticated) {
            <Redirect to="/otp-verify" />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="span12">
                        <form className="form-horizontal" onSubmit={this.submit}>
                            <fieldset>
                                <div id="legend">
                                    <legend className="">Login</legend>
                                </div>
                                <div className="control-group">

                                    <label className="control-label" htmlFor="username">Username</label>
                                    <div className="controls">
                                        <input type="text" id="username" name="email" placeholder="" className="input-xlarge" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="control-group">

                                    <label className="control-label" htmlFor="password">Password</label>
                                    <div className="controls">
                                        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="control-group">

                                    <label className="control-label">User Type</label>
                                    <div className="controls">
                                        <select name="user_type" className="form-control" defaultValue={'superadmin'} onChange={this.handleChange}>
                                            <option value="superadmin" >SuperAdmin</option>
                                            <option value="admin">Admin</option>
                                            <option value="member">Member</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="control-group">

                                    <div className="controls">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
