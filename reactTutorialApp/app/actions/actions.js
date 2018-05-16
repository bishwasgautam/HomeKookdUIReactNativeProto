	/*
* action types
*/

export const SEARCH_MEALS = 'SEARCH_MEALS';
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ADD_ORDER = 'ADD_ORDER'
export const FINALIZE_ORDER = 'FINALIZE_ORDER'


export const UserStates = {
	LOGGED_IN : "LOGGED_IN",
	LOGGED_OUT : "LOGGED_OUT"
}

export const SearchBarVisibility = {
	VISIBLE : "VISIBLE",
	HIDDEN : "HIDDEN" 
}

/*
* action creators
*/

export function searchMeals(searchText){
    return {type: SEARCH_MEALS, searchText};
}

export function login(username, password){
    return {type: LOGIN, userInfo: {userName : username, passWord: password}};
}

export function logout(){
    return {type: LOGOUT};
}



