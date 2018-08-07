import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom"

import React, {Component} from "react"

import Home from "../components/Home.jsx"

import data from "./router.config.js"

// import Login from "../components/Login.jsx"

// import Detail from "../components/Detail.jsx"

class RooteRouter extends Component{
    render(){
        return <div>
            <Router>
                <div>
                    <Switch>
                        {/*<Route path="/login" component={Login}></Route>
                        <Route path="/detail" component={Detail}></Route>*/}
                        {
                            data.map((item,key)=>{
                                return <Route key={key} path={item.path} render={({history})=>{
                                    let Con = item.component?item.component:Home
                                    return <div>
                                        {
                                            data.map((item,key)=>{
                                                return <Link key={key} to={item.path}>{item.name}</Link>
                                            })
                                        }
                                        <Con history={history}></Con>
                                    </div>
                                }}></Route>
                            })
                        }
                        <Redirect from="/" to="/home"></Redirect>
                    </Switch>
                </div>
            </Router>
        </div>
    }
}

export default RooteRouter