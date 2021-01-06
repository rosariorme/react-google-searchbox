const initialState = {
	engines:[
		{ id:0, name: 'Google' }, 
		{ id:1, name: 'Bing' }, 
		{ id:2, name: 'Both' }
	],
	selection: -1,
	writtenTxt: ''
	
};

export default function rootReducer(state = initialState, action){
	switch(action.type){
		case 'SELECTION_CHANGE': 
			return {
				selectionChg: action.payload
			}
		default:
			return state
	}
}