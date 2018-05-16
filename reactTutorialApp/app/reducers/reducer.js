import { combineReducers } from 'redux'
import { SEARCH_MEALS, INIT_KOOKDENTRIES, RESET_KOOKDENTRIES, LOGIN, LOGOUT, ADD_ORDER, FINALIZE_ORDER, SHOW_MEAL_DETAILS, UserStates, SearchBarVisibility } from '../actions/actions'
import { SearchHelper } from '../Helpers/searchHelper'

const initialState = {
  mealsNearMe : [],
  userState : UserStates.LOGGED_OUT,
  SearchBarVisibility : SearchBarVisibility.VISIBLE,
  toggle: true,
};

const defaultKookdEntries = [{
					      chef: "Gordon",
					      mealDetail: "Shepherds Pie"
				        },{
				          chef: "Ful Maya",
				          mealDetail: "Thukpa"
				        },{
				          chef: "Harke",
				          mealDetail: "Choila"
				        },{
				          chef: "Balotelli",
				          mealDetail: "Spaghetti"
				        }];

function homePage(state, action) {

	if(!state || state === 'undefined') 
		return initialState;

	switch (action["type"]) {
	    case INIT_KOOKDENTRIES:
	    	{
			return {...state, kookdEntries: defaultKookdEntries};
			}
	    	
		case RESET_KOOKDENTRIES : 
			if(!state.toggle){
				console.log("no toggle return init")
			 return initialState;
			}else{
				console.log("reset ..");
				console.log(state)
			 return {...state, kookdEntries: defaultKookdEntries, toggle: false};
			}
	    case SEARCH_MEALS:
		//dispatcher logic here
		//with ... stuff
		return Object.assign({}, state , SearchHelper.search(action.searchText));
	    case LOGOUT:
		//dispatcher logic
		//with ... stuff
		return {};
		case LOGIN: 
		return {};
	    default: return state; 
	}
}

function mealDetailsPage(state, action) {

	if(!state || state === 'undefined') 
		return initialState;

	switch (action.type) {
	    case SHOW_MEAL_DETAILS:
	    return {...state, ...{currentMeal : action.mealDetails}};
		//dispatcher logic
		//with ... stuff
	    default: return state; 
	}
}

const homeKookdApp = combineReducers({homePage, mealDetailsPage})

export default homeKookdApp;