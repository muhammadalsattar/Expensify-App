import { Login, Logout } from "../../actions/auth";

test('Should run login action', ()=>{
    const action = Login(1)
    expect(action).toEqual({type:'LOGIN', uid:1})
})

test('Should run logout action', ()=>{
    const action = Logout()
    expect(action).toEqual({type:'LOGOUT'})
})