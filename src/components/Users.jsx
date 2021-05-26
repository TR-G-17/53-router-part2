import React from 'react'
import {useHistory} from 'react-router-dom'

const Users = ({users}) => {

    let history = useHistory()

    const clickHandler = (event, id) => {
        event.preventDefault()
        history.push('/users/'+id)
    }

    const renderUsers = (data) => {
        if (data.length === 0) {
            return false
        }
        return data.map(user => (
            <div key={user.id} className="col-3">
                <button
                    onClick={(event) => {clickHandler(event, user.username)}}
                >{user.username}</button>
            </div>

            ))

    }

    return (
        <div className="row">
            {renderUsers(users)}
        </div>
    )
}

export default Users