import React from 'react';
import PostReduxForm from './PostForm';
import Post from './Post';
import './profile.scss';
import Status from './Status';

// Component
const Profile = ({posts, addPost}) => {
   
   // State mapping
   const postsArray = posts.map(post => <Post key={post.id} post={post}></Post>);

   // Set time for post creating
   let date     = new Date().toLocaleDateString();
   let time     = new Date().toLocaleTimeString() 
   let fullDate = `${time} ${date} `;

   // Callbacks
   const onAddPost = (value) => {
      addPost(value.post, fullDate);
   };

   return (
      <div>
         <div className="content">
            <h1>Профиль</h1>
            <Status />
            <PostReduxForm onSubmit={onAddPost} />
         </div>
         <div className="content">
            <div className="posts">
               {postsArray}
            </div>
         </div>
      </div>
   );
};

export default Profile;
