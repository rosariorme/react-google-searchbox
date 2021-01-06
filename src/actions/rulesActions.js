export const selectionChg = rules =>{
	
	console.log("aaaaaa");
	console.log(rules);	
	return {
		type: 'SELECTION_CHANGE',
		payload: rules
	}
}
export const getTodosState = store => store.engines
