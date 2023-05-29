const initialState = {
    items: [],
    isLoaded: false,
};

const sneakers = ( state = initialState, action ) => {
  switch (action.type){
      case 'SET_SNEAKERS':
          return {
              ...state,
              // возьми старые данные из state и замени их (action.payload) нет обновлений верни прошлый state
              items: action.payload,
              isLoaded: true,
          };
      case 'SET_LOADED':
          return {
              ...state,
              isLoaded: action.payload,
          }
      default:
          return state;
  }

};

export default sneakers;
