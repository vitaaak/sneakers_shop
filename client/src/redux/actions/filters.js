export const setCategories = ( categorIndex ) => ({
    type: 'SET_CATEGORIES',
    payload: categorIndex,
})


export const setSortBy = ( name ) => ({
    type: 'SET_SORT_BY',
    payload: name,
})

//actionCreator - функция которая созд объект action