const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "UPDATE_CART":
      const itemExistsUpdate = state.cartItems.find((item) => {
        return item.product.id === action.payload.product.id;
      });

      if (itemExistsUpdate) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.product.id
              ? {
                  product: action.payload.product,
                  quantity: action.payload.count,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { product: action.payload.product, quantity: action.payload.count },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.product.id !== action.payload.id;
        }),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
