import React from 'react';
import PropTypes from 'prop-types';


function User({id, username, first_name, last_name, email ,avator}){
    return <div>
        <h3>{id}</h3>
        <h1>{username}</h1>
        <h2>{first_name}</h2>
        <h3>{last_name}</h3>
        <h3>{email}</h3>
        <h3>{avator}</h3>
    </div>
}


User.propTypes = {
    id : PropTypes.number.isRequired,
    username : PropTypes.string.isRequired,
    first_name : PropTypes.string.isRequired,
    last_name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    avator : PropTypes.string
}

export default User;