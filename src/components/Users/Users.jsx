import React from 'react';
import './users.scss';

// Component}
const Users = ({users}) => {
   const usersArray = users.map(u => (
      <div className="user" key={u.id}>
         <h4>{u.name}</h4>
         <p>{u.status}</p>
      </div>
   ));

   return (
      <div className='users'>
         {usersArray}
      </div>
   );
};

export default Users;
