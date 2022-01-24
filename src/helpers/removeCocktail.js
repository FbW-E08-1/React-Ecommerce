const removeCocktail = (cocktail, cartItems, setCartItems) => {
    //Grab the object from the cart
    const found = cartItems.find((item) => item.id === cocktail.id);

    //Get the index of our found copy item within the cartItems array
    const index = cartItems.indexOf(found);

    //We don't want to mess with the original cartItems array so we make a deep copy into copyCartItems
    let copyCartItems = [...cartItems];

    //Remove the item from our copied array
    copyCartItems.splice(index, 1);

    //Update the state
    setCartItems(copyCartItems);
  };

  export default removeCocktail