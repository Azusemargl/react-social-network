import { User } from "../types/types"

export const followUnfollowAction = (
   object: Array<User>,
   actionId: number,
   action: {followed: boolean}
) => {
   return object.map(u => {
      if (u['id'] === actionId) return {...u, ...action}
      return u
   })
}
