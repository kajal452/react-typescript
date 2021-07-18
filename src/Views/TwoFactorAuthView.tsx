import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Props } from '../Redux/Model'

export default class TwoFactorAuthView extends Component<Props> {

    render() {

        if (!this.props.isAuthenticated) { return <Redirect to="/login" /> } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <form className="form-horizontal">
                                <fieldset>
                                    <div id="legend">
                                        <legend className="">Otp Verification</legend>
                                    </div>
                                    <div className="control-group">

                                        <label className="control-label" htmlFor="username">Otp</label>
                                        <div className="controls">
                                            <input type="text" id="username" name="username" placeholder="Otp" className="input-xlarge" />
                                        </div>
                                    </div>
                                    <div className="control-group">

                                        <div className="controls">
                                            <button className="btn btn-success">Submit</button>
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
}
