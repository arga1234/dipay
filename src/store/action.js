export const SET_USER = 'SET_USER'
export const UNSET_USER = 'UNSET_USER'

export const setUser = data =>({
    type: SET_USER, 
    payload: data
})

export const unsetUser = () => ({
    type: UNSET_USER
})