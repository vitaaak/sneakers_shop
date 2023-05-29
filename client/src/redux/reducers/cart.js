

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = ( state = initialState, action ) => {
  switch (action.type){
    case 'ADD_SNEAKERS_CART': {
      const currentSneakersItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
///если нет такого ключа state.items[action.payload.id], то создай массив, если есть то пепресоздай, дополни
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentSneakersItems,
          totalPrice: getTotalPrice(currentSneakersItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems)
          }
        }
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems)
          }
        }
      };
    }

    case 'CLEAR_CART':
      return{
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      }
    case 'REMOVE_CART_ITEM':
      const newItems = {
        ...state.items
      }
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return{
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }

      //возьми все старое состояние,
    // возьми айтемс и запихни в этот объект айди.
    // и в айди положи массив
    //в квадратных скобках потому что нужно динамическое свойство.
    default:
      return state;
  }
}

export default cart;