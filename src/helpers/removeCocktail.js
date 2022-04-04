import { ACTIONS } from "../actions/actions";

const removeCocktail = (cocktail, cartItems, cartItemsDispatch) => {
    //Get the cocktail object from the cart matching on Id.
    const found = cartItems.find((item) => item.id === cocktail.id);

    //Get the index of our found copy item within the cartItems array
    const index = cartItems.indexOf(found);

    //We don't want to mess with the original cartItems array so we make a deep copy into copyCartItems
    let copyCartItems = [...cartItems];

    //Remove the item from our copied array
    copyCartItems.splice(index, 1);

    //Update the state
    cartItemsDispatch({type: ACTIONS.CHANGE, payload: copyCartItems});
  };

  export default removeCocktail