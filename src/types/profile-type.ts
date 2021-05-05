import { Photos } from './types'

export type Profile = {
   userId:                    number
   lookingForAJob:            boolean
   lookingForAJobDescription: string
   fullName:                  string
   contacts:                  Contacts
   photos:                    Photos
}

type Contacts = {
   github:    string
   vk:        string
   facebook:  string
   instagram: string
   twitter:   string
   website:   string
   youtube:   string
   mainLink:  string
}

export type Post = {
   id:       number
   name:     string
   nickname: string
   text:     string
   date:     string
}

export type PostsForm = {
   post:     Post
   fullDate: string
}
