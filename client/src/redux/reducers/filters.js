const initialState = {
    sortBy: 'popular',
    categories: null,
}

const filters = ( state = initialState, action ) => {
    if ( action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if( action.type === 'SET_CATEGORIES'){
        return {
            ...state,
            categories: action.payload,
        }
    }
    return state;
}

export default filters;
//как только созд редьюсер ,
// state будет по умолчанию хранить какието данные