import React from 'react';
import PropTypes from 'prop-types';

// This is called Destructuring, pulling only what you need. Makes code look cleaner!
// user is a object so you will need to add its proptype after the return statement
const userItem = ({ user: { login, avatar_url, html_url }}) => {
                        
        return (
            <div className='card '>
                <img 
                    src={avatar_url}
                    alt=''
                    className='round-img'
                    />

                    <h3> {login} </h3>
                    <div>
                        <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
                    </div>
                
            </div>
        )
        }
// assigning the proptype here(you can type 'ptor' for PropTypes.object.isRequired)
        userItem.propsTypes = {
            user: PropTypes.object.isRequired,
        }

export default userItem
