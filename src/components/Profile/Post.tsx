import React from 'react'
import { Post as PostType } from '../../types/profile-type'
import './profile.scss'

// Component
const Post: React.FC<Props> = ({ post }) => {
   return (
      <article className="post">
         <div className="post__info">
            <div className="post__author-avatar"></div>
            <div className="post__author-info">
               <h3 className="post__author-name">{post.name}</h3>
               <span className="post__author-nickname">{post.nickname}</span>
            </div>
         </div>
         <div className="post__content">
            <p className="post__text">{post.text}</p>
         </div>
         <div className="post__footer">
            <time className="post__time">{post.date}</time>
         </div>
      </article>
   )
}

export default Post

// Types
type Props = {
   post: PostType
}
