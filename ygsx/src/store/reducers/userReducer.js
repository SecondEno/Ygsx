const defaultState = {
  users: [],
  userinfo: {},
  token: ''
}

export default (state = defaultState, action) => {

  if ('bindAddUser' === action.type) { // 添加用户
    return {
      ...state,
      users: [...state.users, action.payload]
    }
  } else if ('bindLogin' === action.type) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.token = action.payload
    return newState
  }

  return state
}