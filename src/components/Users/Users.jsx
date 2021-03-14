import React from 'react';
import './users.scss';
import avatar from '../../static/images/avatar.jpg';
import { Link } from 'react-router-dom';

// Component}
const Users = ({users, followAction, unfollowAction}) => {
   const usersArray = users.map(u => (
      <div className="user" key={u.id}>
         <div className="user__avatar">
         <Link to={`/profile/${u.id}`}>
            <img className="user__image" src={u.photos.small ? u.photos.small : avatar} />
         </Link>
         </div>
         <h4 className="user__name">{u.name}</h4>
         <p>{u.status}</p>
         <p>{u.id}</p>
         <p>{u.followed}</p>
         {u.followed
            ? <button className="btn btn-submit btn-unfollow" onClick={() => followAction(u.id)}>Отписаться</button>
            : <button className="btn btn-submit" onClick={() => unfollowAction(u.id)}>Подписаться</button>
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
