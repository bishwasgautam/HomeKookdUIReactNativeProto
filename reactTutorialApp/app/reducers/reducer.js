import { combineReducers } from 'redux'
import { SEARCH_MEALS, INIT_KOOKDENTRIES, RESET_KOOKDENTRIES, LOGIN, LOGOUT, ADD_ORDER, FINALIZE_ORDER, SHOW_MEAL_DETAILS, UserStates, SearchBarVisibility } from '../actions/actions'
import { SearchHelper } from '../Helpers/searchHelper'

const initialState = {
  mealsNearMe : [],
  userState : UserStates.LOGGED_OUT,
  SearchBarVisibility : SearchBarVisibility.VISIBLE
};


function homePage(state, action) {

	if(!state || state === 'undefined') 
		return initialState;

	switch (action["type"]) {
	    case INIT_KOOKDENTRIES:
	    	{
	    	console.log("entries fetched");
			return {...state, kookdEntries :[{
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
				        }]};
			}
	    	
		case RESET_KOOKDENTRIES : 
			 return initialState;
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