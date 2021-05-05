import { instance, Response } from './api'

export const authAPI = {
   me() {
      return instance.get<Response<ResponseMe>>(`auth/me`).then(res => res.data)
   },
   login(email: string, password: string, rememeberMe = false) {
      return instance.post<Response>(`auth/login`, {email, password, rememeberMe}).then(res => res.data)
   },
   logout() {
      return instance.delete(`auth/login`).then(res => res.data)
   }
}

// Types
type ResponseMe = {
   email: string
   id:    number
   login: string
}
