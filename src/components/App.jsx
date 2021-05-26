import React, {Fragment, useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Users from "./Users";
import User from "./User";

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
            .catch(err => console.error(err))
    }, []);

    return (
        <Fragment>
            <Users users={users} />
            <Switch>
                <Route path="/users/:username">
                    <User />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default App