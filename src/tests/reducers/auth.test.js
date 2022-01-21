import authReducer from "../../reducers/auth";

test('Should fire login action and update state', ()=>{
    const action = {type: 'LOGIN', uid:1}
    const result = authReducer({}, action)
    expect(result).toEqual({uid:1})
})

test('Should fire logout action and update state', ()=>{
    const action = {type: 'LOGOUT'}
    const result = authReducer({uid: 1}, action)
    expect(result).toEqual({})
})