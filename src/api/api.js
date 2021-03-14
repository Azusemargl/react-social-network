import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "33f41ecd-78de-4148-a4d2-4a3d4337d6c7"
   },
   
});

export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
   login(email, password, rememeberMe = false) {
      return instance.post(`auth/login`, {email, password, rememeberMe});
   },
   logout() {
      return instance.delete(`auth/login`);
   }
};

export const profileAPI = {
   userProfile(userId) {
      return instance.get(`profile/${userId}`);
   }
};

export const usersAPI = {
   getUsers(page = 1, count = 10) {
      return instance.get(`users?page=${page}&count=${count}`);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`);
   },
};
