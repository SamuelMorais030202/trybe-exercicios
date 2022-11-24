import React from "react";
import Userss from "./Users";
import './ListUsers.css'

class UsersList extends React.Component {
    render() {
        return (
            <div className="container">
                {Userss.map((user, index) => (
                    <div key={index} className="sub_container">
                        <img src={user.avatar} alt={user.name} className='img_avatar' />
                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <h3>Principais habilidades:</h3>
                        <ul>
                            {user.skills.map((skill) => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default UsersList;