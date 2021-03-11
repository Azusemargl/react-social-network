import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "33f41ecd-78de-4148-a4d2-4a3d4337d6c7"
   },
   
});

const newInstance = axios.create({
   withCredentials: true,
   responseType: "json",
   baseURL: 'http://loacalhost:8080/api/',
   headers: {
      "API-KEY": "semargl"
   },
   
});

export const usersAPI = {
   getUsers(page = 1, count = 10) {
      return instance.get(`users?page=${page}&count=${count}`)
         .then(response => {
            if (response.status === 200) {
               return response.data;
            }

            return response.error;
         });
   },
   getAction(userId) {
      return instance.post(`follow/${userId}`);
   },
}

export const authAPI = {
   me(body) {
      return instance.post(`auth`, {body});
   },
}
