import axios from "axios";
import { User } from "../types/types"

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "33f41ecd-78de-4148-a4d2-4a3d4337d6c7"
   },
   
})

// Types
export enum ResultCode {
   Success = 0,
   Error = 1
}
export type Response<D = {}, RC = ResultCode> = {
   data: D
   messages: Array<string>
   resultCode: RC
}
export type GetItems = {
   items: Array<User>
   totalCount: number
   error: string | null
}