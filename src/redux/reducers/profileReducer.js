const ADD_POST = 'profile/ADD-POST';

let initialState = {
    posts: [
        {
            id: 1,
            avatar: '',
            name: 'John',
            nickname: 'Дикий кодер',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum suscipit blanditiis reiciendis cupiditate reprehenderit hic corporis, aperiam deleniti corrupti saepe quae autem, illo assumenda vitae! Sapiente, ipsam. Ratione, molestiae.t',
            date: '13:44 10-03-2021',
        },
    ],
};

// Reducer body
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2, avatar: '',
                name: 'John',
                nickname: 'Дикий кодер',
                text: action.payload.text,
                date: action.payload.date,
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        default:
            return state;
    }
};

// Action creations
export const addPost = (text, date) => ({type: ADD_POST, payload: {text, date}});

export default profileReducer;
