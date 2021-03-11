import React from 'react';
import './users.scss';
import avatar from '../../static/images/avatar.jpg';

// Component}
const Users = ({users, requestAction}) => {
   const onUserAction = (userId) => {
      return requestAction(userId);
   };

   const usersArray = users.map(u => (
      <div className="user" key={u.id}>
         <div className="user__avatar">
         <img className="user__image" src={
            u.photos.small ? u.photos.small : avatar
         } />
         </div>
         <h4 className="user__name">{u.name}</h4>
         <p>{u.status}</p>
         {u.followed
            ? <button className="btn btn-submit btn-unfollow" onClick={() => onUserAction(u.id)}>Отписаться</button>
            : <button className="btn btn-submit" onClick={() => onUserAction(u.id)}>Подписаться</button>
         }
      </div>
   ));

   return (
      <div className='users'>
         {usersArray}
      </div>
   );
};

export default Users;
