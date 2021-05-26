import React, {Fragment, useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

const User = () => {
    let {username} = useParams();
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetching()
    }, []);


    useEffect(() => {
        fetching()
    }, [username]);

    const fetching = () => {
        setUser(null)
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
                .then(res => res.json())
                .then(data => setUser(data[0]))
        }, 1000)
    }

    const renderUser = () => {
        if (!user) {
            return (
                <div className="alert alert-danger w-50 mx-auto my-3" role="alert">
                    Waiting USER's data from a server!!!
                </div>
            )
        }
        return (
            <div className="card text-white bg-success my-3 w-50 mx-auto">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <h5 className="card-title">{user.username} ({user.email})</h5>
                    <p className="card-text">Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                    <p className="card-text">Contact: {user.phone}, {user.website}</p>
                    <p className="card-text">Company: {user.company.name}</p>
                </div>
            </div>
        )
    }

    return renderUser()

    // return (
    //     <Fragment>
    //         {renderUser()}
    //     </Fragment>
    // )
}

export default User