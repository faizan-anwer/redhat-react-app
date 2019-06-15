import { CONTENT, FETCH_CONTENT } from "../actions/types"

export default function(state = [], action){
    switch(action.type){
        case CONTENT:
            return [...state, action.payload];
        case FETCH_CONTENT: 
        const content = action.payload.data.map(content => content.name);
            return [...state, ...content];
        default:
            return state;
    }
}