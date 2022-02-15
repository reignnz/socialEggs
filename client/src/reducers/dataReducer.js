/*
 * Reducers accept the state and action as arguments
 * Purpose of reducers: 
 * - To change the state
*/

const initialState = {
    authenticated: false,
    credentials: {},
    likes: [], 
    notifications: []
}; 

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                authenticated: true,
                // payload is the data that is sent
                ...action.payload
            };
        case 'CREATE_POST':
            return {
                ...state,
                
            }
        default:
            return state; 
    }
};

export default dataReducer;