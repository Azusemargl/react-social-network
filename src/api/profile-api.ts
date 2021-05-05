import { instance, Response } from './api'
import { Profile } from './../types/profile-type';

export const profileAPI = {
   userProfile(userId: number) {
      return instance.get<Profile>(`profile/${userId}`).then(res => res.data)
   },
   status(status: string) {
      return instance.put<Response>(`profile/status`, {status}).then(res => res.data)
   }
}