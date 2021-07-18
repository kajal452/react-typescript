import React from 'react'
import {  Link, Redirect, Route, Switch } from 'react-router-dom';
import Auth, { RouteInterface } from '../Routes/Auth';

function HomeLayout(props: any) {
    console.log(props);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/login">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/otp-verify">Otp Verify</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/otp-verify">Create Idea</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                {Auth.map((route: RouteInterface, id) => { return <Route path={route.path} exact={route.exact} render={(rp) => <route.component  {...props} {...rp} />} /> })}
                <Redirect to="/login" />
            </Switch>
        </div>
    )
}

export default HomeLayout
