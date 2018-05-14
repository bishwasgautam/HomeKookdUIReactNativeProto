import { combineReducers } from 'redux'
import { SEARCH_MEALS, LOGIN, LOGOUT, ADD_ORDER, FINALIZE_ORDER } from './app/actions/actions'
import { UserStates, SearchBarVisibility } from './app/actions/actions'
import { SearchHelper } from './app/Helpers/searchHelper'

const initialState = {
  mealsNearMe : [],
  userState : UserStates.LOGGED_OUT,
  SearchBarVisibility : SearchBarVisibility.VISIBLE
};


function homePage(state = {}, action) {

	if(state === 'undefined') 
		return initialState;

	switch (action.type) {
	    case SEARCH_MEALS:
		//dispatcher logic here
		//with ... stuff
		return Object.assign({}, state , SearchHelper.search(action.searchText));
	    case LOGOUT:
		//dispatcher logic
		//with ... stuff
		return {};
		case LOGIN: 
		return {];
	    default: state; 
	}
}

function mealDetailsPage(state = {}, action) {

	switch (action.type) {
	    case SHOW_MEAL_DETAILS:
	    return {...state, { currentMeal : action.mealDetails}}
		//dispatcher logic
		//with ... stuff
		return {};
	    default: state; 
	}
}

const homeKookdApp = combineReducers({homePage, mealDetailsPage})

export default homeKookdApp;