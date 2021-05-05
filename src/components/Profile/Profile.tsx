import React from 'react'
import PostReduxForm from './PostForm'
import Post from './Post'
import Status from './Status'
import { Post as PostType, PostsForm, Profile as ProfileType } from '../../types/profile-type'
import './profile.scss'

// Component
const Profile: React.FC<Props> = ({profile, posts, addPost}) => {
   
   // State mapping
   const postsArray = posts.map(post => <Post key={post.id} post={post}></Post>)

   // Set time for post creating
   let date     = new Date().toLocaleDateString()
   let time     = new Date().toLocaleTimeString() 
   let fullDate = `${time} ${date} `

   // Callbacks
   const onAddPost = (value: PostsForm) => {
      addPost(value.post, fullDate)
   }

   return (
      <>
         <div className="content">
            <h1>{profile && profile.fullName}</h1>
            <Status />
            <PostReduxForm onSubmit={onAddPost} />
         </div>
         <div className="content">
            <div className="posts">
               {postsArray}
            </div>
         </div>
      </>
   )
}

export default Profile

// Type
type Props = {
   profile: ProfileType
   posts:   Array<PostType>
   addPost: (post: PostType, date: string) => void
}
