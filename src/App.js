import {Route, Switch} from "react-router-dom";
import React from "react";
import {mainRoutes} from './router/index'
const App=()=>{
    return(
        <Switch>
            {
                mainRoutes.map(route=>{
                    return <Route key={route.pathname} path={route.pathname} component={route.component} exact/>
                })
            }
        </Switch>
    )
}
export default App;
