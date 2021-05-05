import React from 'react';
import './users.scss';
import avatar from '../../static/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { User } from '../../types/types';

// Component
const Users: React.FC<Props> = ({ users, followAction, unfollowAction, disabled }) => {
   const usersArray = users.map(u => (
      <div className="user" key={u.id}>
         <div className="user__avatar">
            <Link to={`/profile/${u.id}`}>
               <img className="user__image" src={u.photos.small ? u.photos.small : avatar} />
            </Link>
         </div>
         <h4 className="user__name">{u.name}</h4>
         <p>{u.status}</p>
         {u.followed
            ? <button
               className={'btn btn-submit btn-unfollow'}
               disabled={disabled.some(id => id === u.id)}
               onClick={() => unfollowAction(u.id)}>
                  Отписаться
              </button>
            : <button
               className={'btn btn-submit'}
               disabled={disabled.some(id => id === u.id)}
               onClick={() => followAction(u.id)}>
                  Подписаться
              </button>
         }
      </div>
   ));

   return (
      <div className='users'>
         {usersArray}
      </div>
   );
};

export default Users

// Types
type Props = {
   users:          Array<User>
   disabled:       Array<number>
   followAction:   (id: number) => void
   unfollowAction: (id: number) => void
}
