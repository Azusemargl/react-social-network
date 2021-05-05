import { instance, Response, GetItems } from './api'

export const usersAPI = {
   getUsers(page = 1, count = 10) {
      return instance.get<GetItems>(`users?page=${page}&count=${count}`).then(res => res.data)
   },
   follow(userId: number) {
      return instance.post<Response>(`follow/${userId}`).then(res => res.data)
   },
   unfollow(userId: number) {
      return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<Response>
   },
}