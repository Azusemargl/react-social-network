const initialState = {
    links: [
        {id: 1, title: 'Профиль', path: '/profile'},
        {id: 2, title: 'Сообщения', path: '/dialogs'},
        {id: 3, title: 'Друзья', path: '/users'},
    ]
}

export default (state = initialState, action) => {
    return state
}
